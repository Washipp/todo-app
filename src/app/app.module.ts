import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TaskComponent } from './task/task.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { UdemyFormComponent } from './udemy-form/udemy-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskComponent,
    ContactFormComponent,
    UdemyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
