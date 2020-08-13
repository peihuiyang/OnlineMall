import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { ShareRoutingModule } from './share-routing.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// ag-Grid模块
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

// 组件
import { LeftsiderComponent } from './components/leftsider/leftsider.component';
import { FooterComponent } from './components/footer/footer.component';
import { RightheaderComponent } from './components/rightheader/rightheader.component';
import { DatacontentComponent } from './components/datacontent/datacontent.component';
import { MygridComponent } from './components/mygrid/mygrid.component';


@NgModule({
  declarations: [LeftsiderComponent, FooterComponent, RightheaderComponent, DatacontentComponent, MygridComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ShareRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  exports: [LeftsiderComponent, FooterComponent, RightheaderComponent, DatacontentComponent, MygridComponent],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class ShareModule { }
