import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  // 侧边栏折叠标识
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }
  runCollapsed(msg: boolean): void {
    this.isCollapsed = msg;
  }
}
