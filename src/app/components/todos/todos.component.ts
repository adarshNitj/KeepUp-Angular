import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/todo';
import { TODOS } from 'src/app/todo-mock';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todos: todo[] = [];

  constructor( private todoService : TodoService){

  }
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => this.todos = todos);
  }

  DelTodo(todo: todo){
    this.todoService.deleteTodo(todo).subscribe(() => this.todos = this.todos.filter((td) => td.id !== todo.id))
    // console.log(todo)
  }

  MarkRead(todo: todo){
    todo.reminder = !todo.reminder;
    this.todoService.onMarkRead(todo).subscribe();
  }


  onAddTodo(todo : todo){
    this.todoService.addTodoElement(todo).subscribe((todo) => this.todos.push(todo));
  }


}
