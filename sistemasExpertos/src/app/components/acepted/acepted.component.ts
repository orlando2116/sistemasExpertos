import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//providers
import { PurchaseOrderService} from '../../services/purchase-order.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-aceptacion',
  templateUrl: './acepted.component.html',
  styleUrls: ['./acepted.component.css']
})
export class AceptedComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tipoMovimiento', 'documentos', 'historicoDocumentos'];
  ordenes: any=[];

  private code: string= '';

  private documents: any[]= [];
  private historyMovements: any[]= [];

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _purchaseOrderService: PurchaseOrderService) { 

    this._activatedRouter.params.subscribe(params => {
      this.code = JSON.parse(params['parameter']);
      });
  }

  ngOnInit() {
    this.loadOC();
  }

  loadOC(){
    this._purchaseOrderService.getByCode(this.code)
      .subscribe(res=>{
        this.ordenes= new MatTableDataSource(res.message.results);       
   })
  }

  openDocuments(element){
    this.documents=element.document
  }

  openHistory(element){
    this.historyMovements=element.state_movement_historical;
  }
}
