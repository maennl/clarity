/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<div class="clr-row">
    <div class="clr-col-lg-4 clr-col-sm-6 clr-col-12">
        <div class="card">
            <div class="card-header">
                Unordered Lists
            </div>
            <div class="card-block">
                ...
            </div>
            <div class="card-block">
                <ul class="list">
                    <li>Ullamco Laboris</li>
                    <li>
                        Nisi Ut Aliquip
                        <ul class="list">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ul>
                    </li>
                    <li>Consequat</li>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>Enim ad Minim</li>
                    <li>
                        Occeaecat
                        <ul class="list-unstyled">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="card-footer">
                <a class="btn btn-primary">Action</a>
            </div>
        </div>
    </div>
    <div class="clr-col-lg-4 clr-col-sm-6 clr-col-12">
        <div class="card">
            <div class="card-header">
                Ordered Lists
            </div>
            <div class="card-block">
                ...
            </div>
            <div class="card-block">
                <ol class="list">
                    <li>Ullamco Laboris</li>
                    <li>
                        Nisi Ut Aliquip
                        <ol class="list">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ol>
                    </li>
                    <li>Consequat</li>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>Enim ad Minim</li>
                    <li>
                        Occeaecat
                        <ol class="list-unstyled">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ol>
                    </li>
                </ol>
            </div>
            <div class="card-footer">
                <a class="btn btn-primary">Action</a>
            </div>
        </div>
    </div>
    <div class="clr-col-lg-4 clr-col-sm-6 clr-col-12">
        <div class="card">
            <div class="card-header">
                Unstyled Lists
            </div>
            <div class="card-block">
                <p class="card-text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div class="card-block">
                <ul class="list-unstyled">
                    <li>Ullamco Laboris</li>
                    <li>
                        Nisi Ut Aliquip
                        <ul class="list">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ul>
                    </li>
                    <li>Consequat</li>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>Enim ad Minim</li>
                    <li>
                        Occeaecat
                        <ul class="list-unstyled">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="card-footer">
                <a class="btn btn-primary">Action</a>
            </div>
        </div>
    </div>
</div>
`;

@Component({
  selector: 'clr-lists-in-cards-demo',
  templateUrl: './lists-in-cards.html',
})
export class ListsInCardsDemo {
  example = EXAMPLE;
}
