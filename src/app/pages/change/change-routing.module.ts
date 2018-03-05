/**
 * Created by Asimple on 2018/3/4.
 */
import {RouterModule, Routes} from '@angular/router';
import {ChangeComponent} from './change.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '', component: ChangeComponent,
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class ChangeRoutingModule { }
