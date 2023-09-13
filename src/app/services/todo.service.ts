import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TODOS } from '../todo-mock';
import { todo } from '../todo';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private backendUrl: string = 'http://localhost:5000/todos'

  constructor(private httpclient : HttpClient) { }

  getTodos() : Observable<todo[]> {

    return this.httpclient.get<todo[]>(this.backendUrl)


    // const todos = of(TODOS);
    // return todos;
  }

  deleteTodo(todo : todo) : Observable<todo> {

    const url = `${this.backendUrl}/${todo.id}`

    return this.httpclient.delete<todo>(url)
  }

  onMarkRead(todo : todo) : Observable<todo> {

    const url = `${this.backendUrl}/${todo.id}`

    return this.httpclient.put<todo>(url, todo, options)


  }

  addTodoElement(todo : todo) : Observable<todo> {
    return this.httpclient.post<todo>(this.backendUrl, todo, options)
  }
}
