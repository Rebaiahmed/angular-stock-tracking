import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRootComponent } from './stock-root.component';

describe('StockRootComponent', () => {
  let component: StockRootComponent;
  let fixture: ComponentFixture<StockRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
