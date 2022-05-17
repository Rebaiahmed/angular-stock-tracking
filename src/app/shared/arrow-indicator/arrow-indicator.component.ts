import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-indicator',
  templateUrl: './arrow-indicator.component.html',
  styleUrls: ['./arrow-indicator.component.scss'],
})
export class ArrowIndicatorComponent implements OnInit {
  currentIndicatorValue;

  @Input() set indicatorValue(value: number) {
    this.currentIndicatorValue = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
