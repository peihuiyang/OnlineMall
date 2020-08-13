import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { UsermanageComponent } from './components/usermanage/usermanage.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminmanageComponent } from './components/adminmanage/adminmanage.component';


const routes: Routes = [
  {
    path: 'login', component: AdminloginComponent
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'user', component: UsermanageComponent
  },
  {
    path: 'manage', component: AdminmanageComponent
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
