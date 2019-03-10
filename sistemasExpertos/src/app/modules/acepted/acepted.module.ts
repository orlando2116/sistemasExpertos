import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';

//material
import { MaterialModule } from '../shared/material.module';

//modules
import { DocumentsModule } from '../documents/documents.module';
import { HistoryMovementsModule } from '../history-movements/history-movements.module';

import { AceptedRoutingModule } from './acepted-routing.module';
import { AceptedComponent } from '../../components/acepted/acepted.component';

@NgModule({
  declarations: [AceptedComponent],
  imports: [
    ScrollingModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    AceptedRoutingModule,
    DocumentsModule,
    HistoryMovementsModule
  ],
  exports:[AceptedComponent]
})
export class AceptedModule { }
