import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMovementsComponent } from './history-movements.component';

describe('HistoryMovementsComponent', () => {
  let component: HistoryMovementsComponent;
  let fixture: ComponentFixture<HistoryMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
