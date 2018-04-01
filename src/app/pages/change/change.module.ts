/**
 * Created by Asimple on 2018/3/4.
 */
import {NgModule} from '@angular/core';
import {ChangeRoutingModule} from './change-routing.module';
import {ChangeComponent} from './change.component';
import { ShowComponent } from './show/show.component';
import { ChangeSearchComponent } from './change-search/change-search.component';
import {ThemeModule} from '../../@theme/theme.module';
import {SearchKeyGuard} from '../guard/searchKey.guard';
import {NgxEchartsModule} from 'ngx-echarts';

const component = [
  ChangeComponent,
  ShowComponent,
  ChangeSearchComponent,
];

@NgModule({
  imports: [
    ChangeRoutingModule,
    ThemeModule,
    NgxEchartsModule
  ],
  declarations: [
    ...component,
  ],
  providers: [SearchKeyGuard]
})

export class ChangeModule { }
