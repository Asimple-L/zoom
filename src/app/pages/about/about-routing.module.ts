/**
 * Created by Asimple on 2018/3/4.
 */
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about.component';
import {NgModule} from '@angular/core';
import {ProjectComponent} from './project/project.component';
import {UsComponent} from './us/us.component';

const routes: Routes = [{
  path: '', component: AboutComponent,
  children: [
    {
      path: 'project',
      component: ProjectComponent,
    },
    {
      path: 'us',
      component: UsComponent,
    },
  ]
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class AboutRoutingModule { }
