import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees: any[];
reversestr: string;
gender: string;
  constructor(private service: EmpServiceService) {
    this.employees = [
      {EmpId: 'emp01', Name: 'Pavani', Gender: 'Female', Salary: 10000},
      {EmpId: 'emp02', Name: 'Srinivas', Gender: 'Male', Salary: 10000},
      {EmpId: 'emp03', Name: 'Ravi', Gender: 'Male', Salary: 10000}
    ];
   }

  ngOnInit() {
    this.reversestr = this.service.reverseString('Thank You');
  }
getEmployeeCount(): number {
  return this.employees.length;
}
getFemaleEmployeeCount(): number {
  return this.employees.filter(e => e.Gender === 'Female').length;
}
getMaleEmployeeCount(): number {
  return this.employees.filter(e => e.Gender === 'Male').length;
}
displayValue(value: string) {
  console.log(value);
  this.gender = value;
}
}
