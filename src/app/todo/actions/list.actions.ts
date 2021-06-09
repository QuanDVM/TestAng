import { createAction, props } from '@ngrx/store';
import { Todo } from '../todo.model';

export const GET_TODO_LIST = '[Todo] Get Todo List';
export const SET_TODO_LIST = '[Todo] Set Todo List';

export const getTodoList = createAction(GET_TODO_LIST);
export const setTodoList = createAction(SET_TODO_LIST, props<{ todoList: Todo[] }>());
