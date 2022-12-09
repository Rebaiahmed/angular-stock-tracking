import { Component } from '@angular/core';
import { flatten } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-tracacker';
  time: string;

  constructor() {
    // Original array
let array1 = [[1, 2], [4, 5], [7, 8]]
// Using _.flatten() method
let newArray = flatten(array1);

  }
}
