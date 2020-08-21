import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { RowNode } from 'ag-grid-community';
import { Grid } from '../../../../entity/Common/Grid.entity';

@Component({
  selector: 'app-mygrid',
  templateUrl: './mygrid.component.html',
  styleUrls: ['./mygrid.component.less']
})
export class MygridComponent implements OnInit{
  // 网格设置
  @Input() rowData: [];
  @Input() columnDefs: [];
  @Input() pageTotal: [];
  @Output() private GridData = new EventEmitter<Grid>();
  private defaultColDef = { resizable: true, width: 100 };
  public griddata = new Grid();
  // 分页
  currentPage = 1;
  pageSize = 20;
  selectListData: any[];
  slectData: any;
  constructor() {
  }
  ngOnInit(): void {
    this.griddata.currentPage = this.currentPage;
    this.griddata.pageSize = this.pageSize;
    this.GridData.emit(this.griddata);
  }
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
    this.griddata.selectListData = this.selectListData;
    this.griddata.slectData = this.slectData;
    this.GridData.emit(this.griddata);
  }
  /**
   * 当前页改变
   */
  onPageIndexChange(event: any): void {
    this.currentPage = event;
    this.griddata.currentPage = this.currentPage;
    this.griddata.isSearch = true;
    this.GridData.emit(this.griddata);
    this.griddata.isSearch = false;
  }
  /**
   * 页条数改变
   */
  onPageSizeChange(event: any): void {
    this.pageSize = event;
    this.griddata.pageSize = this.pageSize;
    this.griddata.isSearch = true;
    this.GridData.emit(this.griddata);
    this.griddata.isSearch = false;
  }
}
