/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrDatagridStateInterface } from '@clr/angular';
import { FetchResult, Inventory } from '../inventory/inventory';
import { User } from '../inventory/user';

@Component({
  selector: 'clr-datagrid-preserve-selection-demo',
  providers: [Inventory],
  templateUrl: 'preserve-selection.html',
  styleUrls: ['../datagrid.demo.scss'],
})
export class DatagridPreserveSelectionDemo {
  users: User[];
  selected: User[] = [];
  clientNoTrackByUsers: User[];
  clientNoTrackBySelected: User[] = [];
  clientTrackByIndexUsers: User[];
  clientTrackByIndexSelected: User[] = [];
  clientTrackByIdUsers: User[];
  clientTrackByIdSelected: User[] = [];
  serverTrackByIdUsers: User[];
  serverTrackByIdSelected: User[] = [];
  total = 100;
  loading = true;

  currentPageSize = 10;
  nameFilter = '';
  nameFilterNoTrackBy: string;
  nameFilterTrackByIndex = '';
  nameFilterTrackById = '';
  nameFilterServerTrackBy = '';
  preserveFilteringNoTrackBy = false;
  preserveFilteringTrackByIndex = false;
  preserveFilteringTrackByIdUsers = false;
  preserveFilteringServerTrackBy = false;

  constructor(private inventory: Inventory) {
    this.inventory.size = this.total;
    this.inventory.latency = 500;
    this.inventory.reset();
    this.users =
      this.clientNoTrackByUsers =
      this.clientTrackByIndexUsers =
      this.clientTrackByIdUsers =
        this.inventory.all;
  }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    const filters: { [prop: string]: any[] } = {};
    if (state.filters) {
      for (const filter of state.filters) {
        const { property, value } = filter;
        filters[property] = [value];
      }
    }
    this.inventory
      .filter(filters)
      .sort(state.sort as { by: string; reverse: boolean })
      .fetch(state.page.size * (state.page.current - 1), state.page.size)
      .then((result: FetchResult) => {
        this.serverTrackByIdUsers = result.users;
        this.loading = false;
      });
  }

  backUpUsers: User[] = [];

  updateInventorySize(): void {
    if (this.users.length === 100) {
      this.backUpUsers = this.users.slice();
      this.users = this.backUpUsers.slice(0, 80);
    } else {
      this.users = this.backUpUsers;
      this.backUpUsers = [];
    }
  }

  trackByIndex(index: number, _item: User) {
    return index;
  }

  trackById(_index: number, item: User) {
    return item.id;
  }
}
