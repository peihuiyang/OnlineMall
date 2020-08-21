import { Component, OnInit, ViewChild, Input, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleConstant, TitlePage } from '../../../../entity/Constant/titleConstant';
// 引入的组件
import { CreatedrawerComponent } from '../../../../module/goods/components/goodclassify/createdrawer/createdrawer.component';
import { ModifydrawerComponent } from '../../../../module/goods/components/goodclassify/modifydrawer/modifydrawer.component';

import { SearchInput, FilterEntity } from '../../../../entity/Common/Query.entity';
import { HttpbaseService } from '../../../../service/http/httpbase.service';
import { MsgnoticeService } from '../../../../service/notice/msgnotice.service';
import { ApiUrl, Constants } from '../../../../entity/Constant/constant';
import { ResponseResult, ResponseResults } from '../../../../entity/Common/ResponseResult.entity';
import { GoodsClassifyDto, GCEnableInput, GCDeleteInput } from '../../../../entity/Entity/GoodsClassify.entity';
import { Grid } from '../../../../entity/Common/Grid.entity';

@Component({
  selector: 'app-goodclassify',
  templateUrl: './goodclassify.component.html',
  styleUrls: ['./goodclassify.component.less']
})
export class GoodclassifyComponent implements OnInit {
  @ViewChild('dataContent') dataContent;
  // 侧边栏折叠标识
  isCollapsed = false;
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
  selectListData: GoodsClassifyDto[];
  slectData: GoodsClassifyDto;
  // 页面标题
  PageTitle = TitlePage.GoodClassifyPage;
  // 组件
  CreateDrawer: any;
  ModifyDrawer: any;
  // 查询值
  isSearchVisible = false;
  isSearchLoading = false;
  formName: '';
  formSort: 0;
  enableSelect = true;
  rootSelect = true;
  enableList = [{ label: '是', value: true }, { label: '否', value: false }, { label: '全选', value: null }];
  rootList = this.enableList;
  // 禁用
  gcEnableInputs: GCEnableInput[];
  // 删除
  gCDeleteInput: GCDeleteInput[];
  constructor(private titleService: Title, public http: HttpbaseService, private message: MsgnoticeService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(TitleConstant.GoodClassifyTitle);
    this.CreateDrawer = CreatedrawerComponent;
    this.ModifyDrawer = ModifydrawerComponent;
  }
  /**
   * 定义收缩侧边栏
   * @param state 状态
   */
  runCollapsed(state: boolean): void {
    this.isCollapsed = state;
  }
  /**
   * 获取表格数据
   * @param data 表格参数
   */
  getGridData(data: Grid): void {
    this.selectListData = [];
    this.pageSize = data.pageSize;
    this.currentPage = data.currentPage;
    this.selectListData = data.selectListData;
    this.slectData = data.slectData;
    // 设置修改数据到缓存
    window.localStorage.setItem(Constants.GCModify, JSON.stringify(this.slectData));
    if (data.isSearch) {
      this.handleSearch();
    }
    // 赋值
    if (this.selectListData.length > 0){
      this.gCDeleteInput = [];
      this.selectListData.forEach(element => {
        const deleteInput = new GCDeleteInput();
        deleteInput.bizId = element.bizId;
        this.gCDeleteInput.push(deleteInput);
      });
      this.dataContent.deleteUrl = ApiUrl.GoodscDelete;
      this.dataContent.deleteData = this.gCDeleteInput;
    }
  }
  getSearch(event: any): void {
    this.isSearchVisible = event;
  }
  handleCancel(): void {
    this.isSearchVisible = false;
  }
  /**
   * 执行查询
   */
  handleSearch(): void {
    this.isSearchLoading = true;
    const searchInput = new SearchInput();
    searchInput.queryFilter = [];
    searchInput.pageIndex = this.currentPage;
    searchInput.pageSize = this.pageSize;
    if (typeof (this.formName) !== 'undefined') {
      const filter = new FilterEntity();
      filter.fieldName = 'GcName';
      filter.operator = 'regex';
      filter.fieldValue = this.formName;
      searchInput.queryFilter.push(filter);
    }
    if (this.enableSelect !== null) {
      const filter = new FilterEntity();
      filter.fieldName = 'IsEnable';
      filter.operator = 'eq';
      filter.fieldValue = this.enableSelect;
      searchInput.queryFilter.push(filter);
    }
    if (this.formSort >= 0) {
      const filter = new FilterEntity();
      filter.fieldName = 'Sort';
      filter.operator = 'eq';
      filter.fieldValue = this.formSort;
      searchInput.queryFilter.push(filter);
    }
    if (this.rootSelect !== null) {
      const filter = new FilterEntity();
      filter.fieldName = 'IsRoot';
      filter.operator = 'eq';
      filter.fieldValue = this.rootSelect;
      searchInput.queryFilter.push(filter);
    }
    this.http.post(ApiUrl.GoodscSearch, searchInput)
      .subscribe((res: ResponseResults<GoodsClassifyDto>) => {
        // 赋值
        this.pageTotal = res.data.totalCount;
        this.isSearchVisible = false;
        this.message.Success(res.message);
        this.isSearchLoading = false;
        this.rowData = res.data.dataList;
      },
        (err: any) => {
          this.isSearchLoading = false;
          this.message.Error(err);
        });
  }
  /**
   * 执行禁启用
   * @param event 标识数据
   */
  getEnable(event: any): void {
    this.gcEnableInputs = [];
    if (this.selectListData.length <= 0) {
      this.message.Warn('请选择数据');
    }
    else {
      this.selectListData.forEach(element => {
        const enableInput = new GCEnableInput();
        enableInput.bizId = element.bizId;
        enableInput.isEnable = event;
        this.gcEnableInputs.push(enableInput);
      });
      this.http.post(ApiUrl.GoodscEnable, this.gcEnableInputs).subscribe((res: ResponseResult<GoodsClassifyDto>) => {
        this.message.Success(res.message);
        this.handleSearch();
      },
        (err: any) => {
          this.message.Error(err);
        });
    }
  }
  /**
   * 完成删除后执行的函数
   * @param event 标识数据
   */
  onFinishDelete(event: any): void {
    if (event){
      this.handleSearch();
    }
  }
}

