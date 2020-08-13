import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.less']
})
export class GoodslistComponent implements OnInit {
  // 侧边栏折叠标识
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }
  // 折叠函数
  runCollapsed(state: boolean): void {
    this.isCollapsed = state;
  }
  // 新增函数
  onCreate(): void {
    console.log('你点了新建按钮');
  }
}
