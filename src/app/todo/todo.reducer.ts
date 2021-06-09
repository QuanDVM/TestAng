import { createReducer, on } from '@ngrx/store';
import { setTodoList } from './actions/list.actions';
import { Todo } from './todo.model';

export const initialStateList: Todo[] = [];
export const initialStateAction: Todo = {
  id: '',
  name: '',
  isDone: false,
  editing: false
};

const _todoReducerList = createReducer(
  initialStateList,
  on(setTodoList, (state: Todo[], actions) => {
    return actions.todoList;
  })
);

export function todoReducerList(state: any, action: any) {
  return _todoReducerList(state, action);
}

