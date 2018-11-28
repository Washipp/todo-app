import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { LikeComponent } from './like/like.component';
import { TodoComponent } from './todo/todo.component';
import { TodoButtonComponent } from './todo-button/todo-button.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    LikeComponent,
    TodoComponent,
    TodoButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
