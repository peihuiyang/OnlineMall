import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleConstant } from '../../../../entity/Constant/titleConstant';
import { AdminCreateInput, AdminDto, AdminModifyInput, AdminEnableInput, AdminDeleteInput } from '../../../../entity/Entity/AdminExtend.entity';
import { ApiUrl, Constants } from '../../../../entity/Constant/constant';
import { ResponseResult, ResponseResults, TokenAdmin } from '../../../../entity/Common/ResponseResult.entity';
import { SearchInput, FilterEntity } from '../../../../entity/Common/Query.entity';
// 引入服务
import { HttpbaseService } from '../../../../service/http/httpbase.service';
import { MsgnoticeService } from '../../../../service/notice/msgnotice.service';
import { RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-adminmanage',
  templateUrl: './adminmanage.component.html',
  styleUrls: ['./adminmanage.component.less']
})
export class AdminmanageComponent implements OnInit {
  // 侧边栏折叠标识
  isCollapsed = false;
  public token: TokenAdmin;
  // 新增
  createVisible = false;
  isCreateLoading = false;
  switchEnable = false;
  adminCode = '';
  adminName = '';
  adminPwd = '';
  adminDept = '';
  adminDuty = '';
  adminJurisd = 0;
  http: any;
  public adminCreateInput = new AdminCreateInput();
  // 查询
  isSearchVisible = false;
  isSearchLoading = false;
  formName = '';
  formJurisdiction = 0;
  enableSelect = true;
  optionList = [{label: '是', value: true}, {label: '否', value: false}];
  // 页面标题
  PageTitle = TitleConstant.AdminmanageTitle;
  // 网格设置
  private defaultColDef = { resizable: true, width: 100 };
  adminColumn = [
    {headerName: '', field: 'id', width: 50, checkboxSelection: true, headerCheckboxSelection: true, rowMultiSelectWithClick: true},
    {headerName: '账号', field: 'code', sortable: true, filter: true},
    {headerName: '名称', field: 'name', sortable: true, filter: true},
    {headerName: '部门', field: 'dept', sortable: true, filter: true},
    {headerName: '职责', field: 'duty', sortable: true, filter: true},
    {headerName: '权限', field: 'jurisdiction', sortable: true, filter: true},
    {headerName: '启用', field: 'isEnable_DName', sortable: true, filter: true},
    {headerName: '创建人', field: 'createdBy', sortable: true, filter: true},
    {headerName: '创建时间', field: 'createdTime', sortable: true, filter: true},
    {headerName: '修改人', field: 'modifyBy', sortable: true, filter: true},
    {headerName: '修改时间', field: 'modifyTime', sortable: true, filter: true}
  ];
  adminData = [];
  // 数据选中
  selectListData: AdminDto[];
  slectData: AdminDto;
  // 修改变量
  modifyVisible = false;
  isModifyLoading = false;
  public adminModifyInput = new AdminModifyInput();
  // 禁启用
  adminEnableInputs: AdminEnableInput[];
  adminDeleteInputs: AdminDeleteInput[];
  // 分页
  currentPage = 1;
  pageTotal = 20;
  pageSize = 20;
  constructor(private titleService: Title, public Http: HttpbaseService, private message: MsgnoticeService) {
    this.http = Http;
  }

  ngOnInit(): void {
    this.titleService.setTitle(TitleConstant.AdminmanageTitle);
    this.token = JSON.parse(window.localStorage.getItem(Constants.AdminToken));
  }
  runCollapsed(msg: boolean): void {
    this.isCollapsed = msg;
  }
  // 新增模态框
  showCreateModal(): void {
    this.createVisible = true;
  }
  closeCreate(): void {
    this.createVisible = false;
  }
  /**
   * 新增
   */
  onCreate(): void {
    this.isCreateLoading = true;
    const token = this.token.token;
    // 获取新增实体
    this.adminCreateInput.code = this.adminCode;
    this.adminCreateInput.name = this.adminName;
    this.adminCreateInput.adminPwd = this.adminPwd;
    this.adminCreateInput.dept = this.adminDept;
    this.adminCreateInput.duty = this.adminDuty;
    this.adminCreateInput.jurisdiction = this.adminJurisd;
    this.adminCreateInput.isEnable = this.switchEnable;
    this.http.post(ApiUrl.AdminCreate, this.adminCreateInput, token).subscribe((res: ResponseResult<AdminDto>) => {
      this.isCreateLoading = false;
      this.message.Success(res.message);
      this.createVisible = false;
    },
    (err: any) => {
      this.isCreateLoading = false;
      console.log(err);        // 失败
      this.message.Error(err);
    });
  }
  // 查询模态框
  showSearchModal(): void {
    this.isSearchVisible = true;
  }
  handleCancel(): void {
    this.isSearchVisible = false;
  }
  /**
   * 查询
   */
  handleSearch(): void {
    this.isSearchLoading = true;
    const searchInput = new SearchInput();
    searchInput.queryFilter = [];
    searchInput.pageIndex = this.currentPage;
    searchInput.pageSize = this.pageSize;
    if (this.formName !== ''){
      const filter = new FilterEntity();
      filter.fieldName = 'Name';
      filter.operator = 'regex';
      filter.fieldValue = this.formName;
      searchInput.queryFilter.push(filter);
    }
    if (this.enableSelect !== null){
      const filter = new FilterEntity();
      filter.fieldName = 'IsEnable';
      filter.operator = 'eq';
      filter.fieldValue = this.enableSelect;
      searchInput.queryFilter.push(filter);
    }
    if (this.formJurisdiction > 0 && this.formJurisdiction < 6){
      const filter = new FilterEntity();
      filter.fieldName = 'Jurisdiction';
      filter.operator = 'eq';
      filter.fieldValue = this.formJurisdiction;
      searchInput.queryFilter.push(filter);
    }
    this.http.post(ApiUrl.AdminSearch, searchInput, this.token.token)
    .subscribe((res: ResponseResults<AdminDto>) => {
      // 赋值
      this.pageTotal = res.data.totalCount;
      this.isSearchVisible = false;
      this.message.Success(res.message);
      this.isSearchLoading = false;
      this.adminData = res.data.dataList;
    },
    (err: any) => {
      this.isSearchLoading = false;
      this.message.Error(err);
    });
  }
  // 修改开始
  showModifyModal(): void {
    if (this.selectListData.length !== 1){
      this.message.Warn('请选择1条数据');
    }
    else {
      this.modifyVisible = true;
      this.adminName = this.slectData.name;
      this.adminPwd = '';
      this.adminDept = this.slectData.dept;
      this.adminDuty = this.slectData.dept;
      this.adminJurisd = this.slectData.jurisdiction;
      this.switchEnable = this.slectData.isEnable;
    }
  }
  closeModify(): void {
    this.modifyVisible = false;
  }
  /**
   * 执行修改
   */
  onModify(): void {
    this.isModifyLoading = true;
    this.adminModifyInput.bizId = this.slectData.bizId;
    this.adminModifyInput.name = this.adminName;
    this.adminModifyInput.adminPwd = this.adminPwd;
    this.adminModifyInput.dept = this.adminDept;
    this.adminModifyInput.duty = this.adminDuty;
    this.adminModifyInput.jurisdiction = this.adminJurisd;
    this.adminModifyInput.isEnable = this.switchEnable;
    this.http.post(ApiUrl.AdminModify, this.adminModifyInput, this.token.token).subscribe((res: ResponseResult<AdminDto>) => {
      this.isModifyLoading = false;
      this.message.Success(res.message);
      this.modifyVisible = false;
      this.handleSearch();
    },
    (err: any) => {
      this.isModifyLoading = false;
      console.log(err);        // 失败
      this.message.Error(err);
    });
  }
  // 修改结束
  /**
   * 禁用
   */
  onDisable(): void {
    this.adminEnableInputs = [];
    if (this.selectListData.length <= 0){
      this.message.Warn('请选择数据');
    }
    else{
      this.selectListData.forEach(element => {
        const enableInput = new AdminEnableInput();
        enableInput.bizId = element.bizId;
        enableInput.isEnable = false;
        this.adminEnableInputs.push(enableInput);
      });
      this.http.post(ApiUrl.AdminEnable, this.adminEnableInputs, this.token.token).subscribe((res: ResponseResult<AdminDto>) => {
        this.message.Success(res.message);
        this.handleSearch();
      },
      (err: any) => {
        this.message.Error(err);
      });
    }
  }
  onEnable(): void {
    this.adminEnableInputs = [];
    if (this.selectListData.length <= 0){
      this.message.Warn('请选择数据');
    }
    else{
      this.selectListData.forEach(element => {
        const enableInput = new AdminEnableInput();
        enableInput.bizId = element.bizId;
        enableInput.isEnable = true;
        this.adminEnableInputs.push(enableInput);
      });
      this.http.post(ApiUrl.AdminEnable, this.adminEnableInputs, this.token.token).subscribe((res: ResponseResult<AdminDto>) => {
        this.message.Success(res.message);
        this.handleSearch();
      },
      (err: any) => {
        this.message.Error(err);
      });
    }
  }
  /**
   * 删除
   */
  onDelete(): void {
    this.adminDeleteInputs = [];
    if (this.selectListData.length <= 0){
      this.message.Warn('请选择数据');
    }
    else{
      this.selectListData.forEach(element => {
        const deleteInput = new AdminDeleteInput();
        deleteInput.bizId = element.bizId;
        this.adminDeleteInputs.push(deleteInput);
      });
      this.http.post(ApiUrl.AdminDelete, this.adminDeleteInputs, this.token.token).subscribe((res: ResponseResult<AdminDto>) => {
        this.message.Success(res.message);
        this.handleSearch();
      },
      (err: any) => {
        this.message.Error(err);
      });
    }
  }
  /**
   * 选中行
   * @param event 事件
   */
  onRowSelected(event: any): void {
    // console.log(event);
    // console.log(event.node.data);
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
    // console.log(this.slectData);
    // console.log(this.selectListData);
    // const rowCount = event.api.getSelectedNodes().length;
    // window.alert('selection changed, ' + rowCount + ' rows selected');
  }
  /**
   * 当前页改变
   */
  onPageIndexChange(event: any): void {
    this.currentPage = event;
    this.handleSearch();
  }
  /**
   * 页条数改变
   */
  onPageSizeChange(event: any): void {
    this.pageSize = event;
  }
}
