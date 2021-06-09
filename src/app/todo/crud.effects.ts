import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodoService } from './todo.service';
import { addTodo, deleteTodo, updateTodo } from './actions/crud.action';
import { getTodoList } from './actions/list.actions';

@Injectable()
export class CrudEffects {
  addToDo$ = createEffect(() => this.actions$.pipe(
    ofType(addTodo),
    mergeMap(param => this.todoService.add(param.todo)
      .pipe(
        map(() => getTodoList()),
        catchError(() => EMPTY)
      ))
    )
  );

  deleteToDo$ = createEffect(() => this.actions$.pipe(
    ofType(deleteTodo),
    mergeMap(param => this.todoService.delete(param.id)
      .pipe(
        map(() => getTodoList()),
        catchError(() => EMPTY)
      ))
    )
  );

  updateToDo$ = createEffect(() => this.actions$.pipe(
    ofType(updateTodo),
    mergeMap(param => this.todoService.update(param.todo.id, param.todo)
      .pipe(
        map(() => getTodoList()),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}