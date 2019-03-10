import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'code', 'documentType', 'business_name'];

  @Input() documents: any;  

  constructor() {
  }

  ngOnInit() {
  }

}
