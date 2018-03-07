/**
 * Created by Asimple on 2018/3/3.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StructedComponent} from './structed.component';
import {SearchContentComponent} from './searchContent/searchContent.component';
import {SearchKeyGuard} from '../guard/searchKey.guard';

const routes: Routes = [
  {path: '', component: StructedComponent, },
  { path: 'searchcontent', canActivate: [SearchKeyGuard], component: SearchContentComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructedRoutingModule { }
