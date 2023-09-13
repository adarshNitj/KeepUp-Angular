import { TestBed } from '@angular/core/testing';

import { TodoGuardService } from './todo-guard.service';

describe('TodoGuardService', () => {
  let service: TodoGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
