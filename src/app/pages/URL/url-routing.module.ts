/**
 * Created by Asimple on 2018/3/4.
 */
import {RouterModule, Routes} from '@angular/router';
import {UrlComponent} from './url.component';
import {NgModule} from '@angular/core';
import {SearchPageComponent} from './search-page/search-page.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchGuard} from './guard/search.guard';


const routes: Routes = [
  { path: 'search-input', component: SearchPageComponent},
  { path: 'search-result', canActivate: [SearchGuard], component: SearchResultComponent },
  { path: '', redirectTo: 'search-input', pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule ]
})

export class UrlRoutingModule {}
