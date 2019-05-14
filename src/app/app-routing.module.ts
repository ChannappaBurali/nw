import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [{path: 'pipe', component: PipeExampleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppRoutingModule { }
