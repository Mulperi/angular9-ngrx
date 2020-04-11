import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodosState, todosFeatureKey } from '../reducers/todos.reducer';
import { AppState } from '../reducers/index';
import { Todo } from 'src/app/models/Todo.model';

export const selectFeatureTodos = createFeatureSelector<AppState, TodosState>(
  todosFeatureKey
);

export const selectTodosEntities = createSelector(
  selectFeatureTodos,
  (state: TodosState) => state.entities as { [key: string]: Todo }
);

export const selectTodosLoading = createSelector(
  selectFeatureTodos,
  (state: TodosState) => state && (state.loading as boolean)
);

export const selectTodosAsArray = createSelector(selectTodosEntities, (todos) =>
  Object.keys(todos).map((id: string) => todos[id])
);
