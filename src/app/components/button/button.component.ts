import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
      
  @Input() text:string = "aa";
  @Input() color: string = "pink";

  @Output() newclick = new EventEmitter;

  onClick() {
    this.newclick.emit();
    console.log('add');
  }
}
