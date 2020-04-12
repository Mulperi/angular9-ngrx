import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { TodosService } from '../../services/todos.service';
import * as TodosActions from '../actions/todos.actions';
import { Todo } from 'src/app/models/Todo.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class TodosEffects {
  todosGet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.todosGet),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map((todos: Todo[]) => {
            this.snackBar.open('Todos loaded');
            return TodosActions.todosGetSuccess({ todos });
          }),
          catchError((errorMessage) =>
            of(TodosActions.todosGetFailed({ errorMessage }))
          )
        )
      )
    )
  );

  todosDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.todosDelete),
      map(({ id }) => {
        this.snackBar.open('Deleted item');
        return TodosActions.todosDeleteSuccess({ id });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private todosService: TodosService,
    private snackBar: MatSnackBar
  ) {}
}
