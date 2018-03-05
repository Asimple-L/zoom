/**
 * Created by Asimple on 2018/3/4.
 */
import {UrlComponent} from './url.component';
import {NgModule} from '@angular/core';
import {UrlRoutingModule} from './url-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import {ThemeModule} from '../../@theme/theme.module';
import {SearchGuard} from './guard/search.guard';

const component = [
  UrlComponent,
  SearchPageComponent,
  SearchResultComponent,
];

@NgModule({
  imports: [
    UrlRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...component,
  ],
  providers: [ SearchGuard ]
})
export class UrlModule {
}
