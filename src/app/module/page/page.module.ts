import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// ag-Grid模块
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

import { ShareModule } from '../share/share.module';

import { PageRoutingModule } from './page-routing.module';
import { IndexComponent } from './components/index/index.component';
import { UsermanageComponent } from './components/usermanage/usermanage.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminmanageComponent } from './components/adminmanage/adminmanage.component';


@NgModule({
  declarations: [IndexComponent, UsermanageComponent, AdminloginComponent, AdminmanageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    ShareModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class PageModule { }
