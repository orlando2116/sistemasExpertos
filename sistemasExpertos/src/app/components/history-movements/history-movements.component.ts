import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history-movements',
  templateUrl: './history-movements.component.html',
  styleUrls: ['./history-movements.component.css']
})
export class HistoryMovementsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'movement_state', 'state_date'];

  @Input() historyMovements: any;

  constructor() { }

  ngOnInit() {
  }
}
