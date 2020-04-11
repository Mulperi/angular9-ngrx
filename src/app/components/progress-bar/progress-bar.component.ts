import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromTodos from 'src/app/store/selectors/todos.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  todosLoading$: Observable<boolean> = this.store.select(
    fromTodos.selectTodosLoading
  );

  constructor(private store: Store<AppState>) {}
}
