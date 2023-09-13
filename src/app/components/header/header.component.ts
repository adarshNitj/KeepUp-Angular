import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   title:string = 'TODO APP';

   displayForm : boolean = false;
   subscription : Subscription = new Subscription();

   constructor(private uiservice : UiService){
    this.subscription = this.uiservice.onDisplay().subscribe((value) => this.displayForm = value);
   }


   clickTODO(){
      this.uiservice.displayForm();
   }


}
