import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { Todo } from "./todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:3000/champions';
  constructor(private http: HttpClient) { }

  get() {
    //return new Promise(resolve => resolve(LANGUAGES));
    return this.http.get<Todo[]>(this.baseUrl);
  }
  add(payload: Todo) {
    return this.http.post(this.baseUrl, payload);
  }
  delete(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  update(id: String, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
}
