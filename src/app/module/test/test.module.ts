import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { ShareModule } from '../share/share.module';


// 组件
import { DemoComponent } from './components/demo/demo.component';


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    ShareModule
  ]
})
export class TestModule { }
