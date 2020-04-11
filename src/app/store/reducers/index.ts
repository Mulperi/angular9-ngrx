import { TodosState } from './todos.reducer';
import { UiState } from './ui.reducer';
import * as fromUi from './ui.reducer';

export interface AppState {
  todos: TodosState;
  ui: UiState;
}

export const defaultReducers = {
  ui: fromUi.reducer,
};
