import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { GoodclassifyComponent } from './components/goodclassify/goodclassify.component';
import { GoodscreateComponent } from './components/goodscreate/goodscreate.component';

const routes: Routes = [
  {
    path: 'list', component: GoodslistComponent
  },
  {
    path: 'create', component: GoodscreateComponent
  },
  {
    path: 'classify', component: GoodclassifyComponent
  },
  {
    path: '**', redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
