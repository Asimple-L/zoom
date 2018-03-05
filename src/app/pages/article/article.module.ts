/**
 * Created by Asimple on 2018/3/4.
 */
import {ArticleComponent} from './article.component';
import { AngularEchartsModule } from 'ngx-echarts';
import {NgModule} from '@angular/core';
import {ArticleRoutingModule} from './article-routing.module';
import {ThemeModule} from '../../@theme/theme.module';

const component = [
  ArticleComponent,
];

@NgModule({
  imports: [
    ArticleRoutingModule,
    ThemeModule,
    AngularEchartsModule
  ],
  declarations: [
    ...component,
  ],
})

export class ArticleModule { }
