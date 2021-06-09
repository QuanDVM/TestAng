import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from './todo.model';
import { getTodoList } from './actions/list.actions';
import { addTodo, deleteTodo, updateTodo } from './actions/crud.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  public todos: Observable<Todo[]>;
  public newName: String = '';

  constructor(private store: Store<{todoList: Todo[]}>) {
    this.todos = this.store.select(state => state.todoList);

    this.todos.subscribe(() => {
      this.newName = '';
    })
  }

  getTodos(){
    this.store.dispatch(getTodoList());
  }
  addTodo(){
    this.store.dispatch(addTodo({todo: {
      id: '',
      name: this.newName,
      isDone: false,
      editing: false
    }}));
  }
  destroyTodo({id}: any) {
    this.store.dispatch(deleteTodo({id}))
  }
  updateTodo(todo: Todo, newValue: any, checked: boolean, editing: boolean = false) {
    console.log(editing);
    const updateTodoClone = {...todo};
    updateTodoClone.name = newValue || updateTodoClone.name;
    updateTodoClone.isDone = checked || updateTodoClone.isDone;
    updateTodoClone.editing = editing;
    this.store.dispatch(updateTodo({todo: updateTodoClone}))
  }
  ngOnInit(): void {
    this.getTodos();
  }

}
