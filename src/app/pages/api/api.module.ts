/**
 * Created by Asimple on 2018/3/4.
 */
import {ApiComponent} from './api.component';
import {NgModule} from '@angular/core';
import {ApiRoutingModule} from './api-routing.module';

const component = [
  ApiComponent,
];

@NgModule({
  imports: [
    ApiRoutingModule,
  ],
  declarations: [
    ...component,
  ],
})

export class ApiModule { }
