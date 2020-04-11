import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodosService } from '../../services/todos.service';
import * as TodosActions from '../actions/todos.actions';
import { Todo } from 'src/app/models/Todo.model';

@Injectable()
export class TodosEffects {
  todosGet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.get),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map((todos: Todo[]) => TodosActions.getSuccess({ todos })),
          catchError((errorMessage) =>
            of(TodosActions.getFailed({ errorMessage }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
