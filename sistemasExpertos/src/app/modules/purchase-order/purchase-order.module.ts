import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollDispatcher, ScrollingModule } from '@angular/cdk/scrolling';

import {NgxPaginationModule} from 'ngx-pagination'; 

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderComponent } from '../../components/purchase-order/purchase-order.component';

//material
import { MaterialModule } from '../shared/material.module';

//pipes
import { ConvertDatePipe } from '../../pipes/convert-date.pipe';

@NgModule({
  declarations: [PurchaseOrderComponent,ConvertDatePipe],
  imports: [
    ScrollingModule,
    MaterialModule,
    NgxPaginationModule,
    CommonModule,
    PurchaseOrderRoutingModule
  ],
  providers:[ScrollDispatcher]
})
export class PurchaseOrderModule { }
