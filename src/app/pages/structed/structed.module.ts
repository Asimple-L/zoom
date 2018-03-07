import { NgModule } from '@angular/core';
import {StructedComponent} from './structed.component';
import {StructedRoutingModule} from './structed-routing.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../../@theme/theme.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {DetailModalComponent} from './searchContent/detailModal/detailmodal.component';
import {DownloadModalComponent} from './searchContent/downloadModal/downloadmodal.component';
import {FilterModalComponent} from './searchContent/filterModal/filtermodal.component';
import {IframemodalComponent} from './searchContent/iframelModal/iframemodal.component';
import {SearchKeyGuard} from '../guard/searchKey.guard';
import {SearchContentComponent} from './searchContent/searchContent.component';


const component = [
  StructedComponent,
  SearchContentComponent,
  DetailModalComponent,
  DownloadModalComponent,
  FilterModalComponent,
  IframemodalComponent
];

@NgModule({
  imports: [
    StructedRoutingModule,
    FormsModule,
    CommonModule,
    ThemeModule,
    NgxEchartsModule
  ],
  entryComponents: [FilterModalComponent, DownloadModalComponent, DetailModalComponent, IframemodalComponent],
  declarations: [
    ...component,
  ],
  providers: [ SearchKeyGuard ]
})
export class StructedModule {
}
