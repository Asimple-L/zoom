/**
 * Created by Asimple on 2018/3/4.
 */
import {ArticleComponent} from './article.component';
import {NgModule} from '@angular/core';
import {ArticleRoutingModule} from './article-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {AnalyseComponent} from './analyse/analyse.component';

const component = [
  ArticleComponent,
  AnalyseComponent
];

@NgModule({
  imports: [
    ArticleRoutingModule,
    ThemeModule,
    NgxEchartsModule
  ],
  declarations: [
    ...component
  ],
})

export class ArticleModule { }
