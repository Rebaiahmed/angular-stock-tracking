import { Component } from '@angular/core';
//import * as _ from 'lodash';
import includes from 'lodash/includes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-tracacker';
  time: string;

  constructor() {
    console.log((includes[ 'a'], 'b')); //lodash'includes package' usage

  }
}
