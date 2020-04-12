import { createReducer, on, Action } from '@ngrx/store';
import * as TodosActions from '../actions/todos.actions';
import { Todo } from 'src/app/models/Todo.model';

export interface TodosState {
  entities: { [key: number]: Todo };
  loading: boolean;
  deleting: boolean;
  errorMessage: string;
}

const initialState: TodosState = {
  entities: {},
  loading: false,
  deleting: false,
  errorMessage: '',
};

const todosReducer = createReducer(
  initialState,
  on(TodosActions.todosGet, (state) => ({
    ...state,
    loading: true,
  })),
  on(TodosActions.todosGetSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    entities: todos.reduce(
      (previous: { [key: number]: Todo }, value: Todo) => ({
        ...previous,
        [value.id]: value,
      }),
      state.entities
    ),
  })),
  on(TodosActions.todosGetFailed, (state, { errorMessage }) => ({
    ...state,
    loading: false,
    errorMessage,
  })),
  on(TodosActions.todosDelete, (state) => ({
    ...state,
    deleting: true,
  })),
  on(TodosActions.todosDeleteSuccess, (state, { id }) => ({
    ...state,
    deleting: false,
    entities: Object.keys(state.entities)
      .filter((filterId: string) => {
        return parseInt(filterId, 10) !== id;
      })
      .reduce(
        (previous, value) => ({
          ...previous,
          [value]: state.entities[value],
        }),
        {}
      ),
  })),
  on(TodosActions.todosDeleteFailed, (state, { errorMessage }) => ({
    ...state,
    deleting: false,
    errorMessage,
  }))
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
export const todosFeatureKey = 'todos';
