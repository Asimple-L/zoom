import { NgModule } from '@angular/core';
import { NgxEchartsModule} from 'ngx-echarts';

import { ThemeModule } from '../../../@theme/theme.module';
import {RouterModule} from '@angular/router';
import {DetailModalComponent} from './detailModal/detailmodal.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    RouterModule,
  ],
  declarations: [DetailModalComponent],
})
export class SearchContentModule { }
