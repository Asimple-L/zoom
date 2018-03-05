import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import {ArticleModule} from "./article/article.module";


const routes: Routes = [{
  path: '', component: PagesComponent,
  children: [{
    path: 'structed',
    loadChildren: './structed/structed.module#StructedModule',
  }, {
    path: 'api',
    loadChildren: './api/api.module#ApiModule',
  }, {
    path: 'about',
    loadChildren: './about/about.module#AboutModule',
  }, {
    path: 'change',
    loadChildren: './change/change.module#ChangeModule',
  }, {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule',
  }, {
    path: 'url',
    loadChildren: './URL/url.module#UrlModule',
  }, {
    path: '',
    redirectTo: 'structed',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
