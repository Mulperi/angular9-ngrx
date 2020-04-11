import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState } from 'src/app/store/reducers/todos.reducer';
import * as todosActions from '../../../../store/actions/todos.actions';

@Component({
  selector: 'app-todos-feature-container',
  templateUrl: './todos-feature-container.component.html',
  styleUrls: ['./todos-feature-container.component.scss'],
})
export class TodosFeatureContainerComponent implements OnInit {
  constructor(private store: Store<TodosState>) {}

  ngOnInit() {
    this.store.dispatch(todosActions.get());
  }
}
