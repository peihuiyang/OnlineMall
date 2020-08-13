import { Component, OnInit, ViewChild, Input, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleConstant, TitlePage } from '../../../../entity/Constant/titleConstant';
import { CreatedrawerComponent } from '../../../../module/goods/components/goodclassify/createdrawer/createdrawer.component';

@Component({
  selector: 'app-goodclassify',
  templateUrl: './goodclassify.component.html',
  styleUrls: ['./goodclassify.component.less']
})
export class GoodclassifyComponent implements OnInit {
  // @ViewChild('dataContent') dataContent;
  // 侧边栏折叠标识
  isCollapsed = false;

  columnDefs = [
    { headerName: '编码', field: 'code', sortable: true, filter: true },
    { headerName: '名称', field: 'gcName', sortable: true, filter: true },
    { headerName: '父类名称', field: 'parentName', sortable: true, filter: true },
    { headerName: '是否根类', field: 'isRoot', sortable: true, filter: true },
    { headerName: '是否启用', field: 'isEnable', sortable: true, filter: true },
    { headerName: '排序', field: 'sort', sortable: true, filter: true },
    { headerName: '创建人', field: 'createdBy', sortable: true, filter: true },
    { headerName: '创建时间', field: 'createdTime', sortable: true, filter: true },
    { headerName: '修改人', field: 'modifyBy', sortable: true, filter: true },
    { headerName: '修改时间', field: 'modifyTime', sortable: true, filter: true },
    { headerName: '数据版本', field: 'version', sortable: true, filter: true }
  ];
  rowData = [
    {
      code: '202007001', gcName: '手机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007002', gcName: '电脑', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007003', gcName: '电视机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007001', gcName: '手机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007002', gcName: '电脑', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007003', gcName: '电视机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007001', gcName: '手机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007002', gcName: '电脑', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007003', gcName: '电视机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007001', gcName: '手机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007002', gcName: '电脑', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007003', gcName: '电视机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007001', gcName: '手机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007002', gcName: '电脑', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    },
    {
      code: '202007003', gcName: '电视机', parentName: 'root', isRoot: '是',
      isEnable: '是', sort: 0, createdBy: 'admin', createdTime: '2020-07-23 0:18:00',
      修改人: '', modifyTime: '', version: 1
    }
  ];
  pageTotal = 40;
  // 页面标题
  PageTitle = TitlePage.GoodClassifyPage;
  CreateDrawer: any;
  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(TitleConstant.GoodClassifyTitle);
    this.CreateDrawer = CreatedrawerComponent;
  }
  runCollapsed(state: boolean): void {
    this.isCollapsed = state;
  }
}

