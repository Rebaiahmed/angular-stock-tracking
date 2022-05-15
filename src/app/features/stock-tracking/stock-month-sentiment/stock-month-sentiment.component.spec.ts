import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMonthSentimentComponent } from './stock-month-sentiment.component';

describe('StockMonthSentimentComponent', () => {
  let component: StockMonthSentimentComponent;
  let fixture: ComponentFixture<StockMonthSentimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockMonthSentimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMonthSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
