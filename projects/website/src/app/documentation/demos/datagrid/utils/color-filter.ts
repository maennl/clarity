/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { User } from '../inventory/user';
import { COLORS } from '../inventory/values';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'clr-datagrid-color-filter-demo',
  template: ` <span
    *ngFor="let color of allColors"
    class="color-square color-selectable"
    (click)="toggleColor(color)"
    [style.backgroundColor]="color"
    [class.color-selected]="selectedColors[color]"
  ></span>`,
  styleUrls: ['../datagrid.demo.scss'],
})
export class ColorFilter {
  allColors = COLORS;
  selectedColors: { [color: string]: boolean } = {};
  nbColors = 0;

  private _changes = new Subject<any>();
  // We do not want to expose the Subject itself, but the Observable which is read-only
  public get changes(): Observable<any> {
    return this._changes.asObservable();
  }

  listSelected(): string[] {
    const list: string[] = [];
    for (const color in this.selectedColors) {
      if (this.selectedColors[color]) {
        list.push(color);
      }
    }
    return list;
  }

  toggleColor(color: string) {
    this.selectedColors[color] = !this.selectedColors[color];
    this.selectedColors[color] ? this.nbColors++ : this.nbColors--;
    this._changes.next(true);
  }

  accepts(user: User) {
    return this.nbColors === 0 || this.selectedColors[user.color];
  }

  isActive(): boolean {
    return this.nbColors > 0;
  }
}
