import * as TodoActions from '../actions/todos.actions';
import * as fromTodos from './todos.reducer';
import * as MOCK from '../../testing/mock/';

describe('Todos reducer', () => {
  describe('Todos get', () => {
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
  describe('Todos get success', () => {
    it('should set loading to false, set entities', () => {
      const { initialState } = fromTodos;
      const action = TodoActions.todosGetSuccess({ todos: MOCK.todos });
      const state = fromTodos.reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        loading: false,
        entities: fromTodos.todosAddMany(action.todos, state.entities),
      });
    });
  });
  describe('Todos get failed', () => {
    it('should set loading to false, set errorMessage', () => {
      const { initialState } = fromTodos;
      const action = TodoActions.todosGetFailed({
        errorMessage: 'Error message',
      });
      const state = fromTodos.reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        loading: false,
        errorMessage: action.errorMessage,
      });
    });
  });
  describe('Todos delete', () => {
    it('should set deleting to true', () => {
      const { initialState } = fromTodos;
      const action = TodoActions.todosDelete({ id: 1 });
      const state = fromTodos.reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        deleting: true,
      });
    });
  });
  describe('Todos delete success', () => {
    it('should set deleting to false, remove one entity', () => {
      const { initialState } = fromTodos;
      const action = TodoActions.todosDeleteSuccess({ id: 1 });
      const state = fromTodos.reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        deleting: false,
        entities: fromTodos.todosRemoveOne(action.id, state.entities),
      });
    });
  });
  describe('Todos delete failed', () => {
    it('should set deleting to false, set errorMessage', () => {
      const { initialState } = fromTodos;
      const action = TodoActions.todosDeleteFailed({
        errorMessage: 'Error message',
      });
      const state = fromTodos.reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        deleting: false,
        errorMessage: action.errorMessage,
      });
    });
  });
});
