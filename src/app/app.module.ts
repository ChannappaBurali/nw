import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectiveDirective } from './attribute-directive.directive';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ReverseStringPipe } from './reverse-string.pipe';
import { NewDirectiveDirective } from './new-directive.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { FormsModule } from '@angular/forms';
import {EmpServiceService } from './emp-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveDirective,
    PipeExampleComponent,
    CustomPipePipe,
    ReverseStringPipe,
    NewDirectiveDirective,
    EmployeeListComponent,
    EmployeeCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
