import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTrackerComponent } from './stock-tracker.component';

describe('StockTrackerComponent', () => {
  let component: StockTrackerComponent;
  let fixture: ComponentFixture<StockTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
