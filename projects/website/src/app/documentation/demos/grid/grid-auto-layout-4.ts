/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE1 = `
<div class="clr-row">
    <div class="clr-col">
        <span>clr-col</span>
    </div>
    <div class="clr-col">
        <span>clr-col</span>
    </div>
    <div class="clr-break-row">
    </div>
    <div class="clr-col">
        <span>clr-col</span>
    </div>
    <div class="clr-col">
        <span>clr-col</span>
    </div>
</div>
`;

@Component({
  selector: 'clr-grid-demo-auto-layout-4',
  templateUrl: './grid-auto-layout-4.html',
  styleUrls: ['./grid.demo.scss'],
})
export class GridAutoLayout4Demo {
  example1 = EXAMPLE1;
}
