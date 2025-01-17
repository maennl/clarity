/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<div class="modal static bump-down">
    <div class="modal-dialog" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="alert alert-danger" role="alert">
                <div class="alert-items">
                    <div class="alert-item static">
                        <div class="alert-icon-wrapper">
                            <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
                        </div>
                        <span class="alert-text">
                            Alert in a modal.
                        </span>
                    </div>
                </div>
            </div>
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
`;

@Component({
  selector: 'clr-alert-demo-modals',
  styleUrls: ['../alerts.demo.scss'],
  templateUrl: './alert-modals.demo.html',
})
export class AlertModalsDemo {
  htmlExample = HTML_EXAMPLE;
}
