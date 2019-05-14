import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-employee-list></app-employee-list>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  courses = ['.Net', 'Java', 'Angular', 'SQL Server'];
  title = 'AngularTutorial';
}
