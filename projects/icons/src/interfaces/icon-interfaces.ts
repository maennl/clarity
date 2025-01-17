/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export interface IconAlias {
  [key: string]: string[];
}
export interface IconShapeSources {
  [key: string]: string;
}
export interface ShapeTemplateObservables {
  [key: string]: ((arg0: string) => void)[];
}
