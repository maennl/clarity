/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

const basicHTML = `
<form clrForm>
  <clr-combobox-container>
    <label>Two</label>
    <clr-combobox [(ngModel)]="selected" name="two" required placeholder="Select a number">
      <clr-options>
        <clr-option clrValue="1">1</clr-option>
        <clr-option clrValue="2">2</clr-option>
        <clr-option clrValue="3">3</clr-option>
      </clr-options>
    </clr-combobox>
  </clr-combobox-container>
</form>
`;

@Component({
  selector: 'clr-combobox-basic-demo',
  templateUrl: './combobox-basic.demo.html',
})
export class ComboboxBasicDemo {
  basicHTML = basicHTML;
  selected;
}
