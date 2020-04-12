import * as TodoActions from '../actions/todos.actions';
import * as fromTodos from './todos.reducer';
import * as MOCK from '../../testing/mock/';
import { Todo } from 'src/app/models/Todo.model';

describe('Todos reducer', () => {
  describe('Todos Get', () => {
    it('should set loading to true', () => {
      const { initialState } = fromTodos;
      const action = TodoActions.todosGet();
      const state = fromTodos.reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        loading: true,
      });
    });
  });
  describe('Todos GetSuccess', () => {
    it('should set loading to false, set entities', () => {
      const { initialState } = fromTodos;
      const action = TodoActions.todosGetSuccess({ todos: MOCK.todos });
      const state = fromTodos.reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        loading: false,
        entities: MOCK.todos.reduce(
          (previous: { [key: number]: Todo }, value: Todo) => ({
            ...previous,
            [value.id]: value,
          }),
          {}
        ),
      });
    });
  });
});
