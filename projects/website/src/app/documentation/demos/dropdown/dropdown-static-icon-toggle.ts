/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<div class="dropdown bottom-left open">
    <button class="dropdown-toggle">
        <clr-icon shape="error" class="is-error" size="24"></clr-icon>
        <clr-icon shape="caret down"></clr-icon>
    </button>
    <div class="dropdown-menu">
        <h4 class="dropdown-header">Dropdown header</h4>
        <div class="dropdown-item">Lorem.</div>
        <div class="dropdown-item">Lorem ipsum.</div>
        <div class="dropdown-item">Lorem ipsum dolor.</div>
        <div class="dropdown-divider"></div>
        <div class="dropdown-item">Action 1</div>
    </div>
</div>
`;

@Component({
  selector: 'clr-dropdown-static-icon-toggle-demo',
  styleUrls: ['./dropdown.demo.scss'],
  templateUrl: './dropdown-static-icon-toggle.demo.html',
})
export class DropdownStaticIconToggleDemo {
  example = EXAMPLE;
}
