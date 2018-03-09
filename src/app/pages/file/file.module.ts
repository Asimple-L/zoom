/**
 * Created by Asimple on 2018/3/9.
 */
import {FileComponent} from './file.component';
import {ResultComponent} from './result/result.component';
import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {ThemeModule} from '../../@theme/theme.module';
import {FileRoutingModule} from './file-routing.module';


const component = [
  FileComponent,
  ResultComponent
];

@NgModule({
  imports: [
    FileRoutingModule,
    ThemeModule,
    NgxEchartsModule
  ],
  declarations: [ ...component ]
})

export class FileModule { }

