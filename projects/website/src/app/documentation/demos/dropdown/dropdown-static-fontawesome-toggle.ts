/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<div class="dropdown bottom-right open">
    <button class="dropdown-toggle">
        <span class="fa fa-home fa-fw"></span>
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <div class="dropdown-menu">
        <h4 class="dropdown-header">Dropdown header</h4>
        <div class="dropdown-item">Action 1</div>
        <div class="dropdown-item">Action 2</div>
        <div class="dropdown-item">Action 3</div>
        <div class="dropdown-divider"></div>
        <div class="dropdown-item">Link 1</div>
    </div>
</div>
`;

@Component({
  selector: 'clr-dropdown-static-fontawesome-toggle-demo',
  styleUrls: ['./dropdown.demo.scss'],
  templateUrl: './dropdown-static-fontawesome-toggle.demo.html',
})
export class DropdownStaticFontAwesomeToggleDemo {
  example = EXAMPLE;
}
