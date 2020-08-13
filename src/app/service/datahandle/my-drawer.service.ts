import { Injectable } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
@Injectable({
  providedIn: 'root'
})
export class MyDrawerService {

  constructor(private drawerService: NzDrawerService) { }
  CreateMyDrawer(drTitle: string, contentPanel: any, drPlacement: any): void {
    const drawerRef = this.drawerService.create({
      nzTitle: drTitle,
      nzContent: contentPanel,
      nzWidth: 320,
      nzPlacement: drPlacement
    });
  }
}
