/**
 * Created by Asimple on 2018/3/4.
 */
import {AboutComponent} from './about.component';
import {NgModule} from '@angular/core';
import {AboutRoutingModule} from './about-routing.module';
import {ProjectComponent} from './project/project.component';
import {UsComponent} from './us/us.component';

const component = [
  AboutComponent,
  ProjectComponent,
  UsComponent
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
