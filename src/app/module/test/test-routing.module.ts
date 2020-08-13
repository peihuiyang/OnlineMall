import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';


const routes: Routes = [
  {
    path: 'demo', component: DemoComponent
  },
  {
    path: '**', redirectTo: 'demo'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
