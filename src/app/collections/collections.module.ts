import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

import { MaterialModule } from '../material/material.module';

import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TAbsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TAbsComponent,

  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CollectionsModule { }
