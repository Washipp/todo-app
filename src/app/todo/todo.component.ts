import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input('todoText') todoText: string;
  @Input('isActive') isActive: boolean;
  isSaved: boolean;

  onFocusOut() {
    console.log('selected: ' + this.isActive);
    this.save();
  }

  onChange() {
    this.isActive = !this.isActive;
    this.save();
  }

  save() {
    this.isSaved = Math.floor((Math.random() * 5) + 1) !== 1;
    console.log('has been saved: ' + this.isSaved);
  }

}
