import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
 // tslint:disable-next-line:no-input-rename
 @Input() all;
 @Input() female;
 @Input() male;
 radiobtnvalue = 'All';

 @Output() selectValueEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
radiobuttonChange() {
this.selectValueEvent.emit(this.radiobtnvalue);
}
}
