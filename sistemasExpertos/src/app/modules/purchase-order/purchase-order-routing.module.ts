import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { PurchaseOrderComponent } from '../../components/purchase-order/purchase-order.component';

const routes: Routes = [
  {path: 'ordenes', component: PurchaseOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }
