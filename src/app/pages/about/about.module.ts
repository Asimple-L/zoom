/**
 * Created by Asimple on 2018/3/4.
 */
import {AboutComponent} from './about.component';
import {NgModule} from '@angular/core';
import {AboutRoutingModule} from './about-routing.module';

const component = [
  AboutComponent,
];

@NgModule({
  imports: [
    AboutRoutingModule,
  ],
  declarations: [
    ...component,
  ],
})

export class AboutModule { }
