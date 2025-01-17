/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<div class="stack-view">
    <div class="stack-block">
        <div class="stack-block-label">
            <div class="stack-view-key" aria-level="1" aria-posinset="1" aria-setsize="3">
                Label 1
            </div>
            <div class="stack-block-content">Content 1</div>
        </div>
    </div>
    <div class="stack-block stack-block-expandable stack-block-expanded">
        <div class="stack-block-label">
            <div class="stack-view-key" aria-level="1" aria-posinset="2" aria-setsize="3">
                Label 2
            </div>
            <div class="stack-block-content">Content 2</div>
        </div>
        <div class="stack-children">
            <div class="stack-block">
                <div class="stack-block-label">
                    <div class="stack-view-key">
                        Sub-label 1
                    </div>
                    <div class="stack-block-content">Sub-content 1</div>
                </div>
            </div>
            <div class="stack-block">
                <div class="stack-block-label">
                    <div class="stack-view-key" >
                        Sub-label 2
                    </div>
                    <div class="stack-block-content">Sub-content 2</div>
                </div>
            </div>
            <div class="stack-block">
                <div class="stack-block-label">
                    <div class="stack-view-key">
                        Sub-label 3
                    </div>
                    <div class="stack-block-content">Sub-content 3</div>
                </div>
            </div>
        </div>
    </div>
    <div class="stack-block stack-block-expandable">
        <div class="stack-block-label">
            <div class="stack-view-key" aria-level="1" aria-posinset="3" aria-setsize="3">
                Label 3
            </div>
            <div class="stack-block-content">Content 3</div>
        </div>
        <div class="stack-children"></div>
    </div>
</div>
`;

@Component({
  selector: 'clr-stack-view-static-demo',
  templateUrl: './stack-view-static.html',
  styleUrls: ['./stack-view.demo.scss'],
})
export class StackViewStaticDemo {
  example = EXAMPLE;
}
