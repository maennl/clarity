/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { customElement, i18n, I18nService } from '@cds/core/internal';
import { html, LitElement } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

const i18nValues = {
  open: 'Open my element',
  close: 'Close my element',
};

/** @element test-18n-element */
@customElement('test-18n-element')
class TestI18nElement extends LitElement {
  @i18n() i18n = i18nValues;

  render() {
    return html`<slot></slot>`;
  }
}

/** @element test-alert-18n-element */
@customElement('test-alert-18n-element')
class TestAlertI18nElement extends LitElement {
  @i18n() i18n: Record<string, any> = I18nService.keys.alert;

  greeting = 'hello';

  render() {
    return html`<p>ohai</p>`;
  }
}

describe('i18n decorator', () => {
  let testElement: HTMLElement;
  let component: TestI18nElement;
  const closeText = 'Close my example element';

  beforeEach(async () => {
    testElement = await createTestElement(html` <test-18n-element></test-18n-element> `);
    component = testElement.querySelector<TestI18nElement>('test-18n-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should allow setting values for i18n', () => {
    expect(component.i18n).toEqual(i18nValues);
  });

  it('should allow setting values for i18n through cds-i18n attribute', async () => {
    await componentIsStable(component);
    component.setAttribute('cds-i18n', `{ "close": "${closeText}" }`);
    await componentIsStable(component);
    expect(component.i18n.close).toEqual(closeText);
    component.setAttribute('cds-i18n', `{ "close": "ohai" }`);
    await componentIsStable(component);
    expect(component.i18n.close).toEqual('ohai', 'double set i18n');
  });
});

describe('i18n overrides: ', () => {
  let testElement: HTMLElement;
  let component: TestAlertI18nElement;

  beforeEach(async () => {
    testElement = await createTestElement(html` <test-alert-18n-element></test-alert-18n-element> `);
    component = testElement.querySelector<TestAlertI18nElement>('test-alert-18n-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('picks up alert i18n as expected', () => {
    const testMe = component.i18n;
    expect(testMe.closeButtonAriaLabel).toBe('Close');
    expect(testMe.loading).toBe('Loading');
    expect(testMe.success).toBe('Success');
  });

  it('overrides from cds-i18n attr as expected, even partially', async () => {
    component.setAttribute('cds-i18n', '{ "closeButtonAriaLabel": "${greeting} world" }');
    await componentIsStable(component);
    const testMe = component.i18n;
    expect(testMe.closeButtonAriaLabel).toBe('hello world');
    expect(testMe.loading).toBe('Loading');
    expect(testMe.success).toBe('Success');
  });

  it('overrides from i18n as expected, even partially', async () => {
    component.i18n = { closeButtonAriaLabel: '${greeting} from the other side...' };
    await componentIsStable(component);
    const testMe = component.i18n;
    expect(testMe.closeButtonAriaLabel).toBe('hello from the other side...');
    expect(testMe.loading).toBe('Loading');
    expect(testMe.success).toBe('Success');
  });
});
