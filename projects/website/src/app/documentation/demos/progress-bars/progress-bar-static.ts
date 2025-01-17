/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clr-progress-bar-static-demo',
  styleUrls: ['progress-bars.demo.scss'],
  templateUrl: './progress-bar-static.html',
})
export class ProgressBarStaticDemo implements OnInit {
  staticProgbarValue: number = 0;
  staticDangerValue: number = 0;
  staticSuccessValue: number = 0;
  staticLabeledProgbarValue: number = 0;

  getNewValue(): number {
    const random: number = Math.floor(Math.random() * 98) + 1;
    return parseInt(random + '', 10);
  }

  setNewValues(): void {
    this.staticProgbarValue = this.getNewValue();
    this.staticLabeledProgbarValue = this.getNewValue();
    this.staticDangerValue = this.getNewValue();
    this.staticSuccessValue = this.getNewValue();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.setNewValues();
    }, 800);
  }
}
