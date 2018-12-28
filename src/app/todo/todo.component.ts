import {Component} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask = {
    isActive: false,
    todoText: ''
  };

  tasks = [
    { isActive: false, todoText: 'This is a sample text11111'},
    { isActive: true, todoText: 'This is a sample text22222'},
    { isActive: false, todoText: 'This is a sample text3333'}
  ];

  addNewTask() {
    this.tasks.push(
      {isActive: this.newTask.isActive, todoText: this.newTask.todoText}
    );
  }

}
