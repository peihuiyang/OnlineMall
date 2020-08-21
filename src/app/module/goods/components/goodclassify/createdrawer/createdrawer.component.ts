import { Component, OnInit } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { HttpbaseService } from '../../../../../service/http/httpbase.service';
import { MsgnoticeService } from '../../../../../service/notice/msgnotice.service';
import { GCCreateInput, GoodsClassifyDto } from '../../../../../entity/Entity/GoodsClassify.entity';
import { ApiUrl } from '../../../../../entity/Constant/constant';
import { ResponseResult } from '../../../../../entity/Common/ResponseResult.entity';

@Component({
  selector: 'app-createdrawer',
  templateUrl: './createdrawer.component.html',
  styleUrls: ['./createdrawer.component.less']
})
export class CreatedrawerComponent implements OnInit {
  isCreateLoading = false;
  switchRoot = true;
  switchEnable = false;
  goodscCode = '';
  goodscName = '';
  parentId = '';
  parentName = '';
  parentOptions = '';
  goodscSort = 0;
  http: any;
  constructor(private drawerRef: NzDrawerRef<number>, public Http: HttpbaseService, private message: MsgnoticeService) {
    this.http = Http;
   }
  ngOnInit(): void {
  }
  onDateCreate(): void {
    const gCCreateInput = new GCCreateInput();
    this.isCreateLoading = true;
    if (this.DoCheckData()){
      gCCreateInput.code = this.goodscCode;
      gCCreateInput.gcName = this.goodscName;
      gCCreateInput.isEnable = this.switchEnable;
      gCCreateInput.isRoot = this.switchRoot;
      gCCreateInput.parentId = this.parentId;
      gCCreateInput.parentName = this.parentName;
      gCCreateInput.sort = this.goodscSort;
      this.http.post(ApiUrl.GoodscCreate, gCCreateInput).subscribe((res: ResponseResult<GoodsClassifyDto>) => {
        this.message.Success(res.message);
        this.isCreateLoading = false;
        this.drawerRef.close(200);
      },
      (err: any) => {
        this.message.Error(err);
        this.isCreateLoading = false;
      });
    }
    else {
      this.isCreateLoading = false;
      this.message.Warn('请完善数据！');
    }
  }
  DoCheckData(): boolean {
    if (this.goodscCode !== '' || this.goodscName !== '' || (this.switchRoot !== true && this.parentName !== '')){
      return true;
    }
    else{
      return false;
    }
  }
}
