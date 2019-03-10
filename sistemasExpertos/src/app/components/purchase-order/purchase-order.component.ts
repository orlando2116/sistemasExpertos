import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

//services
import { TokenService } from '../../services/shared/token.service';
import { PurchaseOrderService } from '../../services/purchase-order.service';

//models
import { PurchaseOrder } from '../../models/purchase-order'; 

@Component({
  selector: 'app-ordenes-compra',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  private token: string;

  private purchaseOrders: PurchaseOrder[]= [];
  private totalItems: number= 0;
  private currentPage: number= 1;

  constructor(    
    private router:Router,
    private _tokenService:TokenService,
    private _purchaseOrderService:PurchaseOrderService) {    

    }

  ngOnInit() {
    this.loadOC(this.currentPage);
  }

  loadOC(pageNumber){
    this._purchaseOrderService.get(pageNumber)
    .subscribe(res=>{    
    this.purchaseOrders=res.message.data.results;
    this.loadPaginator(res);   
  })
  }

  loadPaginator(data){
    this.totalItems=data.message.data.count;   
  }

  changePageData(event:any){
    this.currentPage=event;
    this.loadOC(event);
  }
  
  loadPurchaseProvider(oc:PurchaseOrder){
    this.router.navigate(['/aceptacion',JSON.stringify(oc.code)]);
  }
}


