/**
 * Created by Asimple on 2018/3/9.
 */
import {RouterModule, Routes} from '@angular/router';
import {FileComponent} from './file.component';
import {ResultComponent} from './result/result.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '', component: FileComponent,
  children: [
    { path: 'result', component: ResultComponent }
  ]
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class FileRoutingModule { }
