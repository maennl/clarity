/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import SignpostContentSpecs from './signpost-content.spec';
import SignpostTriggerSpecs from './signpost-trigger.spec';
import SignpostSpecs from './signpost.spec';
import SignpostIdServiceSpec from './providers/signpost-id.service.spec';
import SignpostFocusManagerServiceSpec from './providers/signpost-focus-manager.service.spec';
import { addHelpers } from '../../data/datagrid/helpers.spec';

describe('Signpost', function () {
  addHelpers();
  /*
   * After having to work with it, I think this spec delves waaaay to much into the component's views.
   * So I'm not happy with some of the code I wrote, but refactoring this whole spec is not part of my
   * current work and it'll have to come later.
   */
  SignpostSpecs();
  SignpostContentSpecs();
  SignpostTriggerSpecs();
  SignpostIdServiceSpec();
  SignpostFocusManagerServiceSpec();
});
