import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todo } from 'src/app/todo';
import { TODOS } from 'src/app/todo-mock';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo : todo = {
        id: 2,
        text: 'Morning Breakfast',
        day: '08-08-2023',
        reminder: false
  } ;

  faTimes = faTimes;

  @Output() onDeleteTodo: EventEmitter<todo> = new EventEmitter();

  @Output() onMarkRead: EventEmitter<todo> = new EventEmitter();


  onDelete(todo: todo){
    this.onDeleteTodo.emit(todo);

    // console.log(todo)
  }

  onMarkAsRead(todo: todo, e : Event){
    e.preventDefault();
    this.onMarkRead.emit(todo);
  }
}
