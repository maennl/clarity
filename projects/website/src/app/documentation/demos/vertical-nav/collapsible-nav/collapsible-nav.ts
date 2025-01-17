/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'clr-collapsible-vertical-nav-demo',
  templateUrl: './collapsible-nav.html',
  styleUrls: ['../vertical-nav.demo.scss'],
})
export class CollapsibleVerticalNavDemo {
  @Input() demoHideIcons: boolean = false;
  @Input() demoCollapsed: boolean = false;
}
