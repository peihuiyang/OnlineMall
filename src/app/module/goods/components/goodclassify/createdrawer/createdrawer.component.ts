import { Component, OnInit } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-createdrawer',
  templateUrl: './createdrawer.component.html',
  styleUrls: ['./createdrawer.component.less']
})
export class CreatedrawerComponent implements OnInit {
  isCreateLoading = false;
  switchEnable = false;
  adminCode = '';
  adminName = '';
  adminPwd = '';
  adminDept = '';
  adminDuty = '';
  adminJurisd = 0;
  constructor(private drawerRef: NzDrawerRef<number>) { }
  ngOnInit(): void {
  }
  onDateCreate(): void {
    console.log(this.adminCode + ',' + this.adminName);
    this.drawerRef.close(200);
  }
}
