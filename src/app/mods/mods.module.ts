import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';

import { MaterialModule } from '../material/material.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ModsModule { }
