/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';
import { ClipboardCopyService } from '../clipboard-copy.service';

@Component({
  selector: 'clr-color-scheme-donut',
  templateUrl: './color-scheme-donut.demo.html',
  styleUrls: ['./color-scheme-donut.demo.scss'],
})
export class ColorSchemeDonut {
  readonly cx = 24;
  readonly cy = 24;
  readonly radius = 20;
  readonly viewBox = `0 0 ${2 * this.cx} ${2 * this.cy}`;

  constructor(private clipboardCopy: ClipboardCopyService) {}

  copyContent: string = '';

  donutHoleRadius: number;

  activeColor: string = '';

  private _scheme: any;

  get scheme(): any {
    return this._scheme;
  }

  @Input('clrColorScheme')
  set scheme(scheme: any) {
    this._scheme = scheme;

    this.donutHoleRadius = this.radius - 8;
  }

  private _activeIndex: number = -1;

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(value: number) {
    if (this._scheme.schemeColors[value]) {
      this.activeColor = this._scheme.schemeColors[value].hex;
    } else {
      this.activeColor = '';
    }

    this._activeIndex = value;
  }

  getPath(segmentAngle: number, radius: number) {
    const startAngle = -90;
    let endAngle: number;
    let x1: number;
    let y1: number;
    let x2: number;
    let y2: number;

    endAngle = startAngle + segmentAngle;
    x1 = this.cx + radius * Math.cos((Math.PI * startAngle) / 180);
    y1 = this.cy + radius * Math.sin((Math.PI * startAngle) / 180);
    x2 = this.cx + radius * Math.cos((Math.PI * endAngle) / 180);
    y2 = this.cy + radius * Math.sin((Math.PI * endAngle) / 180);
    return (
      'M' +
      this.cx +
      ',' +
      this.cy +
      ' L' +
      x1 +
      ',' +
      y1 +
      ' A' +
      radius +
      ',' +
      radius +
      ' 0 0,1 ' +
      x2 +
      ',' +
      y2 +
      ' z'
    );
  }

  multiRotate(index: number, segmentAngle: number): string {
    return `rotate(${index * segmentAngle} ${this.cx} ${this.cy})`;
  }

  copiedColor = false;

  copyToClipboard(color: string) {
    this.clipboardCopy.executeCopy(color);
  }
}
