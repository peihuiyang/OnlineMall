import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TokenAdmin } from '../../../../entity/Common/ResponseResult.entity';
import { Constants } from '../../../../entity/Constant/constant';

@Component({
  selector: 'app-leftsider',
  templateUrl: './leftsider.component.html',
  styleUrls: ['./leftsider.component.less']
})
export class LeftsiderComponent implements OnInit {
  @Output() private outer = new EventEmitter<boolean>();
  // 侧边栏折叠标识
  public token: TokenAdmin;
  isCollapsed = false;
  jurisdiction = '1';
  constructor() { }

  ngOnInit(): void {
    // 获取权限
    this.token = JSON.parse(window.localStorage.getItem(Constants.AdminToken));
    this.jurisdiction = this.token.otherMsg;
  }
  // 修改isCollapsed事件
  sendCollapsed(): any{
    this.isCollapsed = !this.isCollapsed;
    this.outer.emit(this.isCollapsed);
  }
}
