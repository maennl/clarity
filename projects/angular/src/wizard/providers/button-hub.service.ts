/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ButtonHubService {
  public buttonsReady = false;

  private _previousBtnClicked = new Subject<any>();
  public get previousBtnClicked(): Observable<any> {
    return this._previousBtnClicked.asObservable();
  }

  private _nextBtnClicked = new Subject<any>();
  public get nextBtnClicked(): Observable<any> {
    return this._nextBtnClicked.asObservable();
  }

  private _dangerBtnClicked = new Subject<any>();
  public get dangerBtnClicked(): Observable<any> {
    return this._dangerBtnClicked.asObservable();
  }

  private _cancelBtnClicked = new Subject<any>();
  public get cancelBtnClicked(): Observable<any> {
    return this._cancelBtnClicked.asObservable();
  }

  private _finishBtnClicked = new Subject<any>();
  public get finishBtnClicked(): Observable<any> {
    return this._finishBtnClicked.asObservable();
  }

  private _customBtnClicked = new Subject<any>();
  public get customBtnClicked(): Observable<any> {
    return this._customBtnClicked.asObservable();
  }

  public buttonClicked(buttonType: string): void {
    if ('previous' === buttonType) {
      this._previousBtnClicked.next(undefined);
    } else if ('next' === buttonType) {
      this._nextBtnClicked.next(undefined);
    } else if ('finish' === buttonType) {
      this._finishBtnClicked.next(undefined);
    } else if ('danger' === buttonType) {
      this._dangerBtnClicked.next(undefined);
    } else if ('cancel' === buttonType) {
      this._cancelBtnClicked.next(undefined);
    } else {
      this._customBtnClicked.next(buttonType);
    }
  }
}
