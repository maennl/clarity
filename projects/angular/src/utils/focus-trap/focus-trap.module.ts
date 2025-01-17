/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FocusTrapDirective } from './focus-trap.directive';

export const FOCUS_TRAP_DIRECTIVES: Type<any>[] = [FocusTrapDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [FOCUS_TRAP_DIRECTIVES],
  exports: [FOCUS_TRAP_DIRECTIVES],
})
export class ClrFocusTrapModule {}
