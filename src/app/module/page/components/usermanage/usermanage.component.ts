import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['./usermanage.component.less']
})
export class UsermanageComponent implements OnInit {
  // 侧边栏折叠标识
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }
  runCollapsed(msg: boolean): void {
    this.isCollapsed = msg;
  }
}
