import { Injectable } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
@Injectable({
  providedIn: 'root'
})
export class MyDrawerService {

  constructor(private drawerService: NzDrawerService) { }
  /**
   * 创建侧边框
   * @param drTitle 标题
   * @param contentPanel 内容面板
   * @param drPlacement 方向
   */
  CreateMyDrawer(drTitle: string, contentPanel: any, drPlacement: any): void {
    const drawerRef = this.drawerService.create({
      nzTitle: drTitle,
      nzContent: contentPanel,
      nzWidth: 320,
      nzPlacement: drPlacement
    });
  }
}
