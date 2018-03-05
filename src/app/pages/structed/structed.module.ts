import { NgModule } from '@angular/core';
import {StructedComponent} from './structed.component';
import {StructedRoutingModule} from './structed-routing.module';


const component = [
  StructedComponent,
];

@NgModule({
  imports: [
    StructedRoutingModule
  ],
  declarations: [
    ...component,
  ],
})
export class StructedModule {
}
