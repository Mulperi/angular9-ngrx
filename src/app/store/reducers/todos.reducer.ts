import { createReducer, on, Action } from '@ngrx/store';
import * as TodosActions from '../actions/todos.actions';
import { Todo } from 'src/app/models/Todo.model';

export interface TodosState {
  entities: { [key: string]: Todo };
  loading: boolean;
  errorMessage: string;
}

const initialState: TodosState = {
  entities: {},
  loading: false,
  errorMessage: '',
};

const todosReducer = createReducer(
  initialState,
  on(TodosActions.get, (state) => ({
    ...state,
    loading: true,
  })),
  on(TodosActions.getSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    entities: todos.reduce(
      (previous: { [key: string]: Todo }, value: Todo) => ({
        ...previous,
        [value.id]: value,
      }),
      state.entities
    ),
  })),
  on(TodosActions.getFailed, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  }))
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
export const todosFeatureKey = 'todos';
