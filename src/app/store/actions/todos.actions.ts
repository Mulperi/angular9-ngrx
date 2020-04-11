import { createAction, props } from '@ngrx/store';

export const get = createAction('[Todos] Get');
export const getSuccess = createAction(
  '[Todos] Get Success',
  props<{ todos: any }>()
);
export const getFailed = createAction(
  '[Todos] Get Failed',
  props<{ errorMessage: string }>()
);
