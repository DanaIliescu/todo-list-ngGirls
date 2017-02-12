import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input [value] = "title" 
           (keyup.enter) = "changeTitle(inputElement)"
           #inputElement
           class="todo-input">
    <button (click) = "changeTitle(inputElement)">
      Save
    </button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private title: string = '';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { 
    console.log('in constructor...');
    console.log(this.title + '... end constructor');
  }

  ngOnInit() {
  }

  changeTitle(inputElementReference): void {
    this.submit.emit(inputElementReference.value);
    console.log(inputElementReference);
    this.title = inputElementReference.value;              
  }
}
