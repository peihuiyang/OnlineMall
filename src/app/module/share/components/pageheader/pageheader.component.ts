import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TokenAdmin } from '../../../../entity/Common/ResponseResult.entity';
import { ApiUrl, Constants } from '../../../../entity/Constant/constant';
import { HeaderBtn } from '../../../../entity/Common/Common.entity';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.less']
})
export class PageheaderComponent implements OnInit {
  @Input() PageTitle: string;
  @Output() private headerbtn = new EventEmitter<HeaderBtn>();
  // 按钮展示
  showButtonNum = 0;
  public token: TokenAdmin;
  // 按钮标识
  public headerBtn = new HeaderBtn();

  constructor() { }

  ngOnInit(): void {
    this.token = JSON.parse(window.localStorage.getItem(Constants.AdminToken));
    this.showButtonNum = Number(this.token.otherMsg);
    this.headerBtn.isCreateVisible = false;
    this.headerBtn.isModifyVisible = false;
    this.headerBtn.isSearchVisible = false;
    this.headerBtn.isEnableVisible = false;
    this.headerBtn.isDisableVisible = false;
    this.headerBtn.isDeleteVisible = false;
  }
  onCreate(): void {
    this.headerBtn.isCreateVisible = true;
    this.headerbtn.emit(this.headerBtn);
    this.headerBtn.isCreateVisible = false;
  }
  onSearch(): void {
    this.headerBtn.isSearchVisible = true;
    this.headerbtn.emit(this.headerBtn);
    this.headerBtn.isSearchVisible = false;
  }
  onModify(): void {
    this.headerBtn.isModifyVisible = true;
    this.headerbtn.emit(this.headerBtn);
    this.headerBtn.isModifyVisible = false;
  }
  onDisEnable(): void{
    this.headerBtn.isDisableVisible = true;
    this.headerbtn.emit(this.headerBtn);
    this.headerBtn.isDisableVisible = false;
  }
  onEnable(): void{
    this.headerBtn.isEnableVisible = true;
    this.headerbtn.emit(this.headerBtn);
    this.headerBtn.isEnableVisible = false;
  }
  onDelete(): void{
    this.headerBtn.isDeleteVisible = true;
    this.headerbtn.emit(this.headerBtn);
    this.headerBtn.isDeleteVisible = false;
  }
}
