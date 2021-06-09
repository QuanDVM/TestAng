import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo.model';

export const ADD_TODO = '[Todo] Add Todo';
export const UPDATE_TODO = '[Todo] Update Todo';
export const DELETE_TODO = '[Todo] Delete Todo';

export const addTodo = createAction(ADD_TODO, props<{ todo: Todo }>());
export const deleteTodo = createAction(DELETE_TODO, props<{ id: String }>());
export const updateTodo = createAction(UPDATE_TODO, props<{ todo: Todo }>());
