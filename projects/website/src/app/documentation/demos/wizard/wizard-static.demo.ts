/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML = `
<div class="clr-wizard">
  <div class="modal static">
    <div class="modal-dialog modal-xl" role="dialog">
      <div class="modal-outer-wrapper">
        <div class="modal-content-wrapper">
          <nav class="modal-nav clr-wizard-stepnav-wrapper">
            <h3 class="clr-wizard-title">Wizard Title</h3>
            <div class="clr-wizard-stepnav">
              <div class="clr-wizard-stepnav-list" role="tablist">
                <div
                  class="clr-wizard-stepnav-item clr-nav-link nav-item active"
                  role="presentation"
                  id="clr-wizard-step-0"
                  aria-selected="true"
                  aria-controls="clr-wizard-step-0"
                >
                  <button class="btn btn-link clr-wizard-stepnav-link" type="button">
                    Step 1
                  </button>
                </div>
                <div
                  class="clr-wizard-stepnav-item clr-nav-link nav-item"
                  role="presentation"
                  id="clr-wizard-step-1"
                  aria-selected="false"
                  aria-controls="clr-wizard-step-1"
                >
                  <button class="btn btn-link clr-wizard-stepnav-link" type="button">
                    Step 2
                  </button>
                </div>
                <div
                  class="clr-wizard-stepnav-item clr-nav-link nav-item"
                  role="presentation"
                  id="clr-wizard-step-2"
                  aria-selected="false"
                  aria-controls="clr-wizard-step-2"
                >
                  <button class="btn btn-link clr-wizard-stepnav-link" type="button">
                    Step 3
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <div class="modal-content">
            <div class="modal-header">
              <button aria-label="Close" class="close" type="button">
                <clr-icon aria-hidden="true" shape="close"></clr-icon>
              </button>
              <h3 class="modal-title">
                <span class="modal-title-text">Title for page 1</span>
              </h3>
            </div>
            <div class="modal-body">
              <main class="clr-wizard-content">
                <div
                  id="clr-wizard-page-0"
                  aria-hidden="false"
                  aria-labelledby="clr-wizard-step-0"
                  class="active clr-wizard-page"
                >
                  <p>Content for step 1</p>
                </div>

                <div
                  id="clr-wizard-page-1"
                  aria-hidden="true"
                  aria-labelledby="clr-wizard-step-1"
                  class="clr-wizard-page"
                >
                  <p>Content for step 2</p>
                </div>

                <div
                  id="clr-wizard-page-2"
                  aria-hidden="true"
                  aria-labelledby="clr-wizard-step-2"
                  class="clr-wizard-page"
                >
                  <p>Content for step 3</p>
                </div>
              </main>
            </div>

            <div class="modal-footer clr-wizard-footer">
              <div class="clr-wizard-footer-buttons">
                <div class="clr-wizard-footer-buttons-wrapper">
                  <div class="clr-wizard-btn-wrapper">
                    <button class="btn clr-wizard-btn btn-link clr-wizard-btn--tertiary">
                      Cancel
                    </button>
                  </div>
                  <div class="clr-wizard-btn-wrapper">
                    <button class="btn clr-wizard-btn btn-primary clr-wizard-btn--primary">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div aria-hidden="true" class="modal-backdrop"></div>
  </div>
</div>
`;

@Component({
  selector: 'clr-wizard-demo-static',
  templateUrl: './wizard-static.demo.html',
})
export class WizardStaticDemo {
  html = HTML;
}
