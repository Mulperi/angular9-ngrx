import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/models/Todo.model';

export const todosGet = createAction('[Todos] Get');
export const todosGetSuccess = createAction(
  '[Todos] Get Success',
  props<{ todos: Todo[] }>()
);
export const todosGetFailed = createAction(
  '[Todos] Get Failed',
  props<{ errorMessage: string }>()
);
export const todosDelete = createAction(
  '[Todos] Delete',
  props<{ id: number }>()
);
export const todosDeleteSuccess = createAction(
  '[Todos] Delete Success',
  props<{ id: number }>()
);
export const todosDeleteFailed = createAction(
  '[Todos] Delete Failed',
  props<{ errorMessage: string }>()
);
