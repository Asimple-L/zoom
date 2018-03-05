/**
 * Created by Asimple on 2018/3/4.
 */
import {RouterModule, Routes} from '@angular/router';
import {ApiComponent} from './api.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '', component: ApiComponent,
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class ApiRoutingModule { }
