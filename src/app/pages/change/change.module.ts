/**
 * Created by Asimple on 2018/3/4.
 */
import {NgModule} from '@angular/core';
import {ChangeRoutingModule} from './change-routing.module';
import {ChangeComponent} from './change.component';

const component = [
  ChangeComponent,
];

@NgModule({
  imports: [
    ChangeRoutingModule,
  ],
  declarations: [
    ...component,
  ]
})

export class ChangeModule { }
