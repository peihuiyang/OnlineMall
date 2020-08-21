import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpbaseService } from '../../../../service/http/httpbase.service';
import { MsgnoticeService } from '../../../../service/notice/msgnotice.service';
import { MyrouteService } from '../../../../service/route/myroute.service';
import { HeaderBtn } from '../../../../entity/Common/Common.entity';
import { TitleConstant, TitlePage } from '../../../../entity/Constant/titleConstant';
import { Grid } from '../../../../entity/Common/Grid.entity';
import { ApiUrl, Constants, PageUrl } from '../../../../entity/Constant/constant';

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.less']
})
export class GoodslistComponent implements OnInit {
  // 侧边栏折叠标识
  isCollapsed = false;
  // 数据Grid
  columnDefs = [
    { headerName: '', field: 'bizId', width: 50, checkboxSelection: true, headerCheckboxSelection: true, rowMultiSelectWithClick: true },
    { headerName: '编码', field: 'code', sortable: true, filter: true },
    { headerName: '名称', field: 'gcName', sortable: true, filter: true },
    { headerName: '父类名称', field: 'parentName', sortable: true, filter: true },
    { headerName: '是否根类', field: 'isRoot_DName', sortable: true, filter: true },
    { headerName: '是否启用', field: 'isEnable_DName', sortable: true, filter: true },
    { headerName: '排序', field: 'sort', sortable: true, filter: true },
    { headerName: '数据版本', field: 'version', sortable: true, filter: true },
    { headerName: '创建人', field: 'createdBy', sortable: true, filter: true },
    { headerName: '创建时间', field: 'createdTime', sortable: true, filter: true },
    { headerName: '修改人', field: 'modifyBy', sortable: true, filter: true },
    { headerName: '修改时间', field: 'modifyTime', sortable: true, filter: true }
  ];
  rowData = [
  ];
  pageTotal = 20;
  // 分页
  currentPage: number;
  pageSize: number;

  // 页面标题
  PageTitle = TitlePage.GoodsListPage;
  constructor(private titleService: Title, private http: HttpbaseService, private message: MsgnoticeService,
    private route: MyrouteService) { }

  ngOnInit(): void {
    this.titleService.setTitle(TitleConstant.GoodsListTitle);
  }
  // 折叠函数
  runCollapsed(state: boolean): void {
    this.isCollapsed = state;
  }
  // 获取按钮点击状态
  getBtnVisible(event: HeaderBtn): void {
    if (event.isCreateVisible){
      this.onCreate();
    }
    if (event.isSearchVisible){
      this.onSearch();
    }
    if (event.isModifyVisible){
      this.onModify();
    }
    if (event.isEnableVisible){
      this.onEnable();
    }
    if (event.isDisableVisible){
      this.onDisable();
    }
    if (event.isDeleteVisible){
      this.onDelete();
    }
  }
  /**
   * 新增
   */
  onCreate(): void {
    this.route.Redirect(PageUrl.GoodsCreate);
  }
  /**
   * 查询
   */
  onSearch(): void {
    console.log('点击了查询');
  }
  /**
   * 修改
   */
  onModify(): void {
    console.log('点击了修改');
  }
  /**
   * 启用
   */
  onEnable(): void {
    console.log('点击了启用');
  }
  /**
   * 禁用
   */
  onDisable(): void {
    console.log('点击了禁用');
  }
  /**
   * 删除
   */
  onDelete(): void {
    console.log('点击了删除');
  }
  /**
   * 获取grid数据
   * @param data grid数据
   */
  getGridData(data: Grid): void {
    this.pageSize = data.pageSize;
    this.currentPage = data.currentPage;
    if (data.isSearch) {
      this.onSearch();
    }
  }
}
