import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowIndicatorComponent } from './arrow-indicator.component';

describe('ArrowIndicatorComponent', () => {
  let component: ArrowIndicatorComponent;
  let fixture: ComponentFixture<ArrowIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
