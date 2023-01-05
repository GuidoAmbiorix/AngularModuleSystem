import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';


import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    DividerComponent
  ]
})
export class SharedModule { }
