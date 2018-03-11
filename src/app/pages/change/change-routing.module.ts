/**
 * Created by Asimple on 2018/3/4.
 */
import {RouterModule, Routes} from '@angular/router';
import {ChangeComponent} from './change.component';
import {NgModule} from '@angular/core';
import {ShowComponent} from './show/show.component';
import {ChangeSearchComponent} from './change-search/change-search.component';
import {SearchKeyGuard} from '../guard/searchKey.guard';

const routes: Routes = [{
  path: '', component: ChangeComponent,
  children: [
    { path: 'show', canActivate: [SearchKeyGuard], component: ShowComponent },
    { path: 'search', component: ChangeSearchComponent },
    { path: '', redirectTo: 'search', pathMatch: 'full'}
  ]
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class ChangeRoutingModule { }
