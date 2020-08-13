import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', loadChildren: './module/page/page.module#PageModule'
  },
  {
    path: 'goods', loadChildren: './module/goods/goods.module#GoodsModule'
  },
  {
    path: 'test', loadChildren: './module/test/test.module#TestModule'
  },
  {
    path: '**', redirectTo: 'admin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
