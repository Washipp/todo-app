import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input('todoText') todoText: string;
  @Input('isActive') isActive: boolean;

  onFocusOut() {
    console.log('saved: ' + this.isActive);
  }

  onChange() {
    this.isActive = !this.isActive;
  }

}
