/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';
import { TodoListStorageService } from './todo-list-storage.service';

describe('TodoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListService]
    });
  });

  it('should ...', inject([TodoListService], (service: TodoListService) => {
    expect(service).toBeTruthy();
  }));
});
