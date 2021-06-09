import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodoService } from './todo.service';
import { getTodoList, setTodoList } from './actions/list.actions';
import { Todo } from './todo.model';

@Injectable()
export class TodoEffects {
  loadToDoList$ = createEffect(() => this.actions$.pipe(
    ofType(getTodoList),
    mergeMap(() => this.todoService.get()
      .pipe(
        map((todoList: Todo[]) => setTodoList({todoList})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}