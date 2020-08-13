import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// 引用自定义模块
import { TestModule } from './module/test/test.module';
import { ShareModule } from './module/share/share.module';
import { PageModule } from './module/page/page.module';
import { GoodsModule } from './module/goods/goods.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // 自定义模块
    TestModule,
    ShareModule,
    PageModule,
    GoodsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
