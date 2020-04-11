import { TodosService } from './todos.service';
import { Todo } from '../models/Todo.model';
import * as MOCK from '../testing/mock';
import { asyncData, asyncError } from '../testing/async-observable-helpers';
import { HttpErrorResponse } from '@angular/common/http';

describe('TodoService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let todoService: TodosService;
  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    todoService = new TodosService(httpClientSpy as any);
  });

  it('should return expected todos (HttpClient called once)', () => {
    const expectedTodos: Todo[] = MOCK.todos;

    httpClientSpy.get.and.returnValue(asyncData(expectedTodos));

    todoService
      .getTodos()
      .subscribe(
        (todos) => expect(todos).toEqual(expectedTodos, 'expected todos'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  //   it('should return an error when the server returns a 404', () => {
  //     const errorResponse = new HttpErrorResponse({
  //       error: 'test 404 error',
  //       status: 404,
  //       statusText: 'Not Found',
  //     });

  //     httpClientSpy.get.and.returnValue(asyncError(errorResponse));

  //     todoService.getTodos().subscribe(
  //       (todos) => fail('expected an error, not todos'),
  //       (error) => expect(error.message).toContain('test 404 error')
  //     );
  //   });
});
