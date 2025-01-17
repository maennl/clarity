/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

// tslint:disable no-var-imports no-var-requires no-require-imports variable-name
const UiBasic = require('raw-loader!./ui/basic.html');
const UiFull = require('raw-loader!./ui/full.html');
const UiError = require('raw-loader!./ui/error.html');
const UiInline = require('raw-loader!./ui/inline.html');
const UiRight = require('raw-loader!./ui/right.html');
const UiDisabled = require('raw-loader!./ui/disabled.html');

const NgBasic = require('raw-loader!./ng/basic.html');
const NgLabel = require('raw-loader!./ng/label.html');
const NgHelpers = require('raw-loader!./ng/helpers.html');
const NgInline = require('raw-loader!./ng/inline.html');
const NgRight = require('raw-loader!./ng/right.html');
const NgDisabled = require('raw-loader!./ng/disabled.html');

@Component({
  templateUrl: './toggles.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class TogglesDemo extends ClarityDocComponent {
  constructor() {
    super('toggle-switches');
  }

  exampleOne = {
    one: false,
    two: false,
  };
  exampleTwo = {
    one: false,
    two: false,
  };
  exampleThree = {
    one: false,
    two: false,
  };
  exampleFour = {
    one: false,
    two: false,
  };

  uiBasic: any = UiBasic;
  uiFull: any = UiFull;
  uiError: any = UiError;
  uiInline: any = UiInline;
  uiRight: any = UiRight;
  uiDisabled: any = UiDisabled;

  ngBasic: any = NgBasic;
  ngLabel: any = NgLabel;
  ngHelpers: any = NgHelpers;
  ngInline: any = NgInline;
  ngRight: any = NgRight;
  ngDisabled: any = NgDisabled;
}
