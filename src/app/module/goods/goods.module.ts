import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
// antd
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// ag-Grid模块
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

import { ShareModule } from '../share/share.module';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { GoodclassifyComponent } from './components/goodclassify/goodclassify.component';
import { CreatedrawerComponent } from './components/goodclassify/createdrawer/createdrawer.component';

@NgModule({
  declarations: [ GoodslistComponent, GoodclassifyComponent, CreatedrawerComponent],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    ShareModule,
    HttpClientModule,
    NgZorroAntdModule,
    AgGridModule.withComponents([]),
    FormsModule
  ]
})
export class GoodsModule { }
