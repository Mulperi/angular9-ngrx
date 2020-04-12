import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodosActions from 'src/app/store/actions/todos.actions';
import * as fromTodos from 'src/app/store/selectors/todos.selectors';
import { AppState } from 'src/app/store/reducers';
import { Todo } from 'src/app/models/Todo.model';

@Component({
  selector: 'app-todos-list-container',
  templateUrl: './todos-list-container.component.html',
  styleUrls: ['./todos-list-container.component.scss'],
})
export class TodosListContainerComponent {
  todos$: Observable<Todo[]> = this.store.select(fromTodos.selectTodosAsArray);

  constructor(private store: Store<AppState>) {}

  trackByMethod(index: number, todo: Todo) {
    return todo.id;
  }

  onRemove(id: number) {
    this.store.dispatch(TodosActions.todosDelete({ id }));
  }
}
