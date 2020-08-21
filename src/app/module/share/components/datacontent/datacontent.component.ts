import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiUrl, Constants } from '../../../../entity/Constant/constant';
import { TokenAdmin } from '../../../../entity/Common/ResponseResult.entity';
import { MyDrawerService } from '../../../../service/datahandle/my-drawer.service';
import { MsgnoticeService } from '../../../../service/notice/msgnotice.service';
import { HttpbaseService } from '../../../../service/http/httpbase.service';

@Component({
  selector: 'app-datacontent',
  templateUrl: './datacontent.component.html',
  styleUrls: ['./datacontent.component.less']
})
export class DatacontentComponent implements OnInit {
  @Input() PageTitle: string;
  @Input() CreateDrawer: any;
  @Input() ModifyDrawer: any;
  @Output() private searchvisible = new EventEmitter<boolean>();
  @Output() private isenable = new EventEmitter<boolean>();
  @Output() private finishdelete = new EventEmitter<boolean>();
  // 按钮展示
  showButtonNum = 0;
  // 新增标识
  isCreateVisible = false;
  // 查询标识
  isSearchVisible = false;
  public token: TokenAdmin;
  // 禁用数据
  isEnable = false;
  deleteUrl: string;
  deleteData = [];
  constructor(public myDrawerService: MyDrawerService, public http: HttpbaseService, private message: MsgnoticeService) { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem(Constants.AdminToken));
    this.showButtonNum = Number(this.token.otherMsg);
  }
  onCreate(): void {
    this.myDrawerService.CreateMyDrawer('新增', this.CreateDrawer, 'right');
  }
  onSearch(): void {
    this.isSearchVisible = true;
    this.searchvisible.emit(this.isSearchVisible);
  }
  onModify(): void {
    this.myDrawerService.CreateMyDrawer('修改', this.ModifyDrawer, 'right');
  }
  onDisEnable(): void{
    this.isEnable = false;
    this.isenable.emit(this.isEnable);
  }
  onEnable(): void{
    this.isEnable = true;
    this.isenable.emit(this.isEnable);
  }
  onDelete(): void{
    if (this.deleteData.length <= 0){
      this.message.Warn('请选择数据');
    }
    else{
      this.http.post(this.deleteUrl, this.deleteData).subscribe((res: any) => {
        this.message.Success(res.message);
        this.finishdelete.emit(true);
      },
      (err: any) => {
        this.message.Error(err);
      });
    }
  }
}
