/**
 * Created by Asimple on 2018/3/3.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StructedComponent} from './structed.component';

const routes: Routes = [{
  path: '',
  component: StructedComponent,
  // children: [{
  //   path: '',
  //   component: StructedComponent,
  // }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructedRoutingModule { }
