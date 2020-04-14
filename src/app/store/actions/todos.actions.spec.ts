import * as TodosActions from './todos.actions';
import * as MOCK from '../../testing/mock/';

describe('Todos actions', () => {
  describe('Todos get', () => {
    it('should create a Todos get action', () => {
      const action = TodosActions.todosGet();
      expect({ ...action }).toEqual({
        type: TodosActions.todosGet.type
      });
    });
  });
  describe('Todos get success', () => {
    it('should create a Todos get success action', () => {
      const todos = MOCK.todos;
      const action = TodosActions.todosGetSuccess({ todos });
      expect({ ...action }).toEqual({
        type: TodosActions.todosGetSuccess.type,
        todos
      });
    });
  });
  describe('Todos get failed', () => {
    it('should create a Todos get failed action', () => {
      const errorMessage = 'Error message';
      const action = TodosActions.todosGetFailed({
        errorMessage
      });
      expect({ ...action }).toEqual({
        type: TodosActions.todosGetFailed.type,
        errorMessage
      });
    });
  });
});
