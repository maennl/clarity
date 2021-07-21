import { html, LitElement } from 'lit';
import { asyncAppend } from 'lit/directives/async-append.js';
import { asyncGroupArray, customElement } from '@cds/core/internal';
import { asyncData } from './async-data.story.js';
import { borderCell, borderColumn, borderStripe, borderNone } from './border.story.js';
import { cellEditable } from './cell-editable.story.js';
import { columnAlignRight, columnAlignCenter } from './column-align.story.js';
import { columnDraggable } from './column-draggable.story.js';
import { columnFilter } from './column-filter.story.js';
import { columnFixed, columnFixedDynamic, columnMultiFixed } from './column-fixed.story.js';
import { columnMultiFilter } from './column-multi-filter.story.js';
import { columnResize, columnFlexWidth } from './column-resize.story.js';
import { columnSticky } from './column-sticky.story.js';
import { columnVisibility } from './column-visibility.story.js';
import { columnOverflow, columnFixedWidth } from './column-width.story.js';
import { compact } from './compact.story.js';
import { darkTheme } from './dark-theme.story.js';
import { footer, footerOptional } from './footer.story.js';
import { basic, keyboard } from './grid.story.js'; // dynamicGrid
import { kitchenSink } from './kitchen-sink.story.js';
import { pagination } from './pagination.story.js';
import { performance } from './performance.story.js';
import { placeholder } from './placeholder.story.js';
import { rangeSelect, rangeSelectContextMenu } from './range-select.story.js';
import { responsive } from './responsive.story.js';
import { rowAction } from './row-action.story.js';
import { rowBatchAction } from './row-batch-action.story.js';
import { rowDetail, rowDetailExpand } from './row-detail.story.js';
import { rowDraggable } from './row-draggable.story.js';
import { rowFixed } from './row-fixed.story.js';
import { rowGroups } from './row-groups.story.js';
import { rowHeader } from './row-header.story.js';
import { rowHeight } from './row-height.story.js';
import { rowMultiSelect } from './row-multi-select.story.js';
import { rowMultiSort } from './row-multi-sort.story.js';
import { rowSingleSelect } from './row-single-select.story.js';
import { rowSort } from './row-sort.story.js';
import { rowSticky } from './row-sticky.story.js';
import { rowSwappable } from './row-swappable.story.js';
import { rtl } from './rtl.story.js';
import { noScroll } from './scroll-height.story.js';

const stories = [
  { fn: basic, title: 'Basic' },
  { fn: keyboard, title: 'Keyboard' },
  { fn: columnResize, title: 'Column Resize' },
  { fn: columnFlexWidth, title: 'Column Flex Width' },
  { fn: columnOverflow, title: 'Column Overflow' },
  { fn: columnFixedWidth, title: 'Column Fixed Width' },
  { fn: placeholder, title: 'Placeholder' },
  { fn: pagination, title: 'Pagination' },
  { fn: columnVisibility, title: 'Column Visibility' },
  { fn: rowDetail, title: 'Row Detail' },
  { fn: rtl, title: 'Row Detail RTL' },
  { fn: rowDetailExpand, title: 'Row Detail Expand', experimental: true },
  { fn: rowGroups, title: 'Row Groups', experimental: true },
  { fn: rowSingleSelect, title: 'Row Single Select' },
  { fn: rowMultiSelect, title: 'Row Multi Select' },
  { fn: rangeSelect, title: 'Range Select', experimental: true },
  { fn: rangeSelectContextMenu, title: 'Range Select Context Menu', experimental: true },
  { fn: rowAction, title: 'Row Action' },
  { fn: rowBatchAction, title: 'Row Batch Action' },
  { fn: rowSort, title: 'Row Sort' },
  { fn: rowMultiSort, title: 'Row Multi Sort' },
  { fn: columnFilter, title: 'Column Filter' },
  { fn: columnMultiFilter, title: 'Column Multi Filter' },
  { fn: asyncData, title: 'Async Data' },
  { fn: columnFixed, title: 'Column Fixed' },
  { fn: columnFixedDynamic, title: 'Column Fixed Dynamic', experimental: true },
  { fn: columnMultiFixed, title: 'Column Multi Fixed', experimental: true },
  { fn: columnSticky, title: 'Column Sticky', experimental: true },
  { fn: columnAlignCenter, title: 'Column Align Center' },
  { fn: columnAlignRight, title: 'Column Align Right' },
  { fn: cellEditable, title: 'Cell Editable', experimental: true },
  { fn: footer, title: 'Footer' },
  { fn: footerOptional, title: 'Footer Optional' },
  { fn: rowHeight, title: 'Row Height' },
  { fn: compact, title: 'Compact' },
  { fn: rowDraggable, title: 'Row Draggable', experimental: true },
  { fn: rowSwappable, title: 'Row Swappable', experimental: true },
  { fn: columnDraggable, title: 'Column Draggable', experimental: true },
  { fn: rowFixed, title: 'Row Fixed', experimental: true },
  { fn: rowSticky, title: 'Row Sticky', experimental: true },
  { fn: performance, title: 'Performance' },
  { fn: kitchenSink, title: 'Kitchen Sink' },
  { fn: responsive, title: 'Responsive' },
  { fn: darkTheme, title: 'Dark Theme' },
  { fn: borderCell, title: 'Border Cell' },
  { fn: borderColumn, title: 'Border Column' },
  { fn: borderStripe, title: 'Border Stripe' },
  { fn: borderNone, title: 'Border None' },
  { fn: rowHeader, title: 'Row Header' },
  { fn: noScroll, title: 'No Scroll' },
];

export function all() {
  @customElement('demo-grid-all')
  class DemoCellEditable extends LitElement {
    render() {
      return html` <style>
          .grid-all-demo > div > *:nth-child(2) {
            width: 100%;
          }
        </style>
        <section class="grid-all-demo" cds-layout="grid cols@lg:6 cols@xl:4 gap:lg">
          ${asyncAppend(asyncGroupArray(stories, 9), group =>
            (group as any).map(
              (story: any) => html` <div cds-layout="vertical gap:lg">
                <h2 cds-text="section">
                  ${story.title}${story.experimental ? html` <small>(experimental)</small>` : ''}
                </h2>
                ${story.fn()}
              </div>`
            )
          )}
        </section>`;
    }

    protected createRenderRoot() {
      return this;
    }
  }

  return html`<demo-grid-all></demo-grid-all>`;
}
