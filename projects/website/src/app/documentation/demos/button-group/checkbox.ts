/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE_1 = `
<div class="btn-group">
    <div class="checkbox btn">
        <input type="checkbox" id="btn-demo-check-1">
        <label for="btn-demo-check-1">Apples</label>
    </div>
    <div class="checkbox btn">
        <input type="checkbox" id="btn-demo-check-2" checked>
        <label for="btn-demo-check-2">Oranges</label>
    </div>
    <div class="checkbox btn">
        <input type="checkbox" id="btn-demo-check-3">
        <label for="btn-demo-check-3">Kiwis</label>
    </div>
    <div class="checkbox btn">
        <input type="checkbox" id="btn-demo-check-4 checked">
        <label for="btn-demo-check-4">Pears</label>
    </div>
</div>
`;

@Component({
  selector: 'clr-button-group-checkbox-demo',
  templateUrl: './checkbox.html',
})
export class ButtonGroupCheckboxDemo {
  htmlExample1 = HTML_EXAMPLE_1;
}
