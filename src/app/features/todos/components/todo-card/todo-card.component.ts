import { Component, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<number> = new EventEmitter();

  onRemove(): void {
    this.remove.emit(this.todo.id);
  }
}
