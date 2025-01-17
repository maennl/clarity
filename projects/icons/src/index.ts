/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIconsApi } from './clr-icons-api';
import { ClarityIconElement } from './clr-icons-element';
import { CoreShapes } from './shapes/core-shapes';

const clarityIcons: ClarityIconsApi = ClarityIconsApi.instance;

clarityIcons.add(CoreShapes);

interface Window {
  ClarityIcons: any;
}
declare let window: Window;

// check if there is a global object called "ClarityIcons"
if (typeof window !== 'undefined') {
  if (!window.hasOwnProperty('ClarityIcons')) {
    // Setting a global object called "ClarityIcons" to expose the ClarityIconsApi.
    window.ClarityIcons = clarityIcons;
  }

  // Defining clr-icon custom element
  if (!customElements.get('clr-icon')) {
    customElements.define('clr-icon', ClarityIconElement as any);
  }
}

export { clarityIcons as ClarityIcons };
