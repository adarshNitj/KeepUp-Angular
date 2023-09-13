import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoGuardService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    return true;
  }
}
