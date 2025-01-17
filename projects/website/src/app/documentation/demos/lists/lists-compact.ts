/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<ul class="list compact">
    <li>...</li>
    <li>
        Ullamco laboris nisi ut aliquip
        <ul class="list">
            <li>Consequat</li>
            <li>Adipisicing</li>
            <li>Exercitation</li>
        </ul>
    </li>
    <li>Reprehenderit in voluptate</li>
    <li>Mollit anim id</li>
</ul>
`;

@Component({
  selector: 'clr-lists-compact-demo',
  templateUrl: './lists-compact.html',
})
export class ListsCompactDemo {
  example = EXAMPLE;
}
