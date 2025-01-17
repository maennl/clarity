/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrLoading } from './loading';

export const CLR_LOADING_DIRECTIVES: Type<any>[] = [ClrLoading];

@NgModule({ imports: [CommonModule], declarations: [CLR_LOADING_DIRECTIVES], exports: [CLR_LOADING_DIRECTIVES] })
export class ClrLoadingModule {}
