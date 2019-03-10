import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from '../../components/documents/documents.component';

//material
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [DocumentsComponent],
  imports: [
    MaterialModule,
    CommonModule,
    DocumentsRoutingModule
  ],
  exports:[DocumentsComponent]
})
export class DocumentsModule { }
