import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:member-ordering
  title = 'Angular 4 Project!';
  // tslint:disable-next-line:member-ordering
  todaydate = new Date();
  // tslint:disable-next-line:member-ordering
  jsonval = {name: 'Rox', age: '25', address: {a1: 'Mumbai', a2: 'Karnataka'}};
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
            'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  ngOnInit() {
  }

}
