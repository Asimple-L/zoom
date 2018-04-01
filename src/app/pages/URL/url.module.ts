/**
 * Created by Asimple on 2018/3/4.
 */
import {NgModule} from '@angular/core';
import {UrlRoutingModule} from './url-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import {ThemeModule} from '../../@theme/theme.module';
import {SearchGuard} from '../guard/search.guard';
import {NgxEchartsModule} from 'ngx-echarts';

const component = [
  SearchPageComponent,
  SearchResultComponent,
];

@NgModule({
  imports: [
    UrlRoutingModule,
    ThemeModule,
    NgxEchartsModule
  ],
  declarations: [
    ...component,
  ],
  providers: [ SearchGuard ]
})
export class UrlModule {
}
