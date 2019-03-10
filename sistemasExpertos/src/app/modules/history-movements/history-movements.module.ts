import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryMovementsRoutingModule } from './history-movements-routing.module';
import { HistoryMovementsComponent } from '../../components/history-movements/history-movements.component';

//material
import { MaterialModule } from '../shared/material.module';

//pipes
import { ConvertDatePipe } from '../../pipes/convert-date.pipe';

@NgModule({
  declarations: [HistoryMovementsComponent],
  imports: [
    
    CommonModule,
    HistoryMovementsRoutingModule,
    MaterialModule
  ],
  exports:[HistoryMovementsComponent]
})
export class HistoryMovementsModule { }
