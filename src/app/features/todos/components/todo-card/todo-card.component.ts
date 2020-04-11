import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Input()
  todo: Todo;
}
