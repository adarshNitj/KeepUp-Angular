import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{

  @Output() onAddTodo : EventEmitter<todo> = new EventEmitter();

  text : string = '1';
  day : string = '2';
  reminder : boolean = false;

  displayForm : boolean = false;
  subscription : Subscription = new Subscription();

  constructor(private uiservice : UiService){
    this.subscription = this.uiservice.onDisplay().subscribe((value) => this.displayForm = value);
  }
  
  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.text){
      alert('Give some value to text')
      return;
    }

    const newTodo = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTodo.emit(newTodo);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
