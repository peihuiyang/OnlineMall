import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiUrl, Constants } from '../../../../entity/Constant/constant';
import { TokenAdmin } from '../../../../entity/Common/ResponseResult.entity';
import { MyDrawerService } from '../../../../service/datahandle/my-drawer.service';

@Component({
  selector: 'app-datacontent',
  templateUrl: './datacontent.component.html',
  styleUrls: ['./datacontent.component.less']
})
export class DatacontentComponent implements OnInit {
  // @ViewChild('drawerCreateTemplate', { static: false }) drawerCreateTemplate?: TemplateRef<{
  //   $implicit: { adminCode: string };
  //   drawerRef: NzDrawerRef<string>;
  // }>;
  @Input() PageTitle: string;
  @Input() CreateDrawer: any;
  @Output() private createvisible = new EventEmitter<boolean>();
  @Output() private searchvisible = new EventEmitter<boolean>();
  // 按钮展示
  showButtonNum = 0;
  // 新增标识
  isCreateVisible = false;
  // 查询标识
  isSearchVisible = false;
  public token: TokenAdmin;
  constructor(public myDrawerService: MyDrawerService) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem(Constants.AdminToken));
    this.showButtonNum = Number(this.token.num);
  }
  onCreate(): void {
    this.myDrawerService.CreateMyDrawer('新增页面', this.CreateDrawer, 'left');
  }
  onSearch(): void {
    this.isSearchVisible = true;
    this.searchvisible.emit(this.isSearchVisible);
  }
  onModify(): void {
  }
  onEnable(): void{
  }
  onDelete(): void{
  }
}
