/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Header</h1>
    <not-ready name="Header"></not-ready>
  `,
})
export class HeaderPage {}
