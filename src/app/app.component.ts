import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask = {
    isActive: false,
    todoText: ''
  };

  tasks = [
    { isActive: false, todoText: 'This is a sample text11111'},
    { isActive: true, todoText: 'This is a sample text22222'},
    { isActive: false, todoText: 'This is a sample text3333'}
  ];

  onSave() {
    this.tasks.push(
      {isActive: this.newTask.isActive, todoText: this.newTask.todoText}
      );
  }
}
