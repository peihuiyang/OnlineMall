import { Component, Input} from '@angular/core';
import { RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-mygrid',
  templateUrl: './mygrid.component.html',
  styleUrls: ['./mygrid.component.less']
})
export class MygridComponent {
  // 网格设置
  @Input() rowData: [];
  @Input() columnDefs: [];
  @Input() pageTotal: [];
  private defaultColDef = { resizable: true, width: 100 };
  // 分页
  currentPage = 1;
  pageSize = 20;
  selectListData: any[];
  slectData: any;
  constructor() { }
  /**
   * 选中行数据变化
   * @param event 事件
   */
  onSelectionChanged(event: any): void {
    this.selectListData = [];
    if (event.api.getSelectedNodes().length > 0) {
      event.api.getSelectedNodes().forEach((element: RowNode) => {
        this.selectListData.push(element.data);
      });
    }
    this.slectData = this.selectListData[0];
  }
  /**
   * 当前页改变
   */
  onPageIndexChange(event: any): void {
    this.currentPage = event;
  }
  /**
   * 页条数改变
   */
  onPageSizeChange(event: any): void {
    this.pageSize = event;
  }
}
