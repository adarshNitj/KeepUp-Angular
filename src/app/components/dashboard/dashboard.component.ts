import { Component } from '@angular/core';
import { TodoGuardService } from 'src/app/services/todo-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [TodoGuardService]
})
export class DashboardComponent {

}
