/**
 * Created by Asimple on 2018/3/4.
 */
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article.component';
import {NgModule} from '@angular/core';
import {AnalyseComponent} from './analyse/analyse.component';

const routes: Routes = [{
  path: '', component: ArticleComponent,
  children: [
    { path: 'analyse', component: AnalyseComponent }
  ]
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class ArticleRoutingModule { }
