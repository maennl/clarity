/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<button class="btn btn-inverse">Inverse</button>
<button class="btn btn-inverse" disabled>Disabled Inverse</button>
`;

@Component({
  selector: 'clr-buttons-demo-inverse-button',
  templateUrl: './inverse-button.html',
  styleUrls: ['./buttons.demo.scss'],
})
export class InverseButtonDemo {
  htmlExample = HTML_EXAMPLE;
}
