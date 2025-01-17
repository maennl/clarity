/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<div class="modal">
    <div class="modal-dialog" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="modal-header">
                <button aria-label="Close" class="close" type="button">
                    <clr-icon aria-hidden="true" shape="close"></clr-icon>
                </button>
                <h3 class="modal-title">I have a nice title</h3>
            </div>
            <div class="modal-body">
                <p>But not much to say...</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" type="button">Cancel</button>
                <button class="btn btn-primary" type="button">Ok</button>
            </div>
        </div>
    </div>
</div>
<div class="modal-backdrop" aria-hidden="true"></div>
`;

@Component({
  selector: 'clr-modal-static-demo',
  templateUrl: './modal-static.demo.html',
})
export class ModalStaticDemo {
  example = EXAMPLE;
}
