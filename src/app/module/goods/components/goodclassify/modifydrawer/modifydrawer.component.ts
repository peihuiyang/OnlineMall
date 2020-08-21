import { Component, OnInit } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { HttpbaseService } from '../../../../../service/http/httpbase.service';
import { MsgnoticeService } from '../../../../../service/notice/msgnotice.service';
import { GCModifyInput, GoodsClassifyDto } from '../../../../../entity/Entity/GoodsClassify.entity';
import { ApiUrl, Constants } from '../../../../../entity/Constant/constant';
import { ResponseResult } from '../../../../../entity/Common/ResponseResult.entity';
@Component({
  selector: 'app-modifydrawer',
  templateUrl: './modifydrawer.component.html',
  styleUrls: ['./modifydrawer.component.less']
})
export class ModifydrawerComponent implements OnInit {
  isModifyLoading = false;
  switchRoot = true;
  switchEnable = false;
  goodscName = '';
  parentId = '';
  parentName = '';
  parentOptions = '';
  goodscSort = 0;
  gCModifyInput: GCModifyInput;
  constructor(private drawerRef: NzDrawerRef<number>, private http: HttpbaseService, private message: MsgnoticeService) { }

  ngOnInit(): void {
    this.gCModifyInput = JSON.parse(window.localStorage.getItem(Constants.GCModify));
    this.switchRoot = this.gCModifyInput.isRoot;
    this.switchEnable = this.gCModifyInput.isEnable;
    this.goodscName = this.gCModifyInput.gcName;
    this.parentId = this.gCModifyInput.parentId;
    this.parentName = this.gCModifyInput.parentName;
    this.goodscSort = this.gCModifyInput.sort;
  }
  onModify(): void {
    const gCModifyInput = new GCModifyInput();
    this.isModifyLoading = true;
    if (this.DoCheckData()){
      gCModifyInput.bizId = this.gCModifyInput.bizId;
      gCModifyInput.version = this.gCModifyInput.version;
      gCModifyInput.isRoot = this.switchRoot;
      gCModifyInput.isEnable = this.switchEnable;
      gCModifyInput.gcName = this.goodscName;
      gCModifyInput.parentId = this.parentId;
      gCModifyInput.parentName = this.parentName;
      gCModifyInput.sort = this.goodscSort;
      this.http.post(ApiUrl.GoodscModify, gCModifyInput).subscribe((res: ResponseResult<GoodsClassifyDto>) => {
        this.message.Success(res.message);
        this.isModifyLoading = false;
        this.drawerRef.close(200);
      },
      (err: any) => {
        this.message.Error(err);
        this.isModifyLoading = false;
      });
    }
    else {
      this.isModifyLoading = false;
      this.message.Warn('请完善数据！');
    }
  }
  DoCheckData(): boolean {
    if (this.goodscName !== '' || (this.switchRoot !== true && this.parentName !== '')){
      return true;
    }
    else{
      return false;
    }
  }
}
