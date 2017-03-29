import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newTodo: any = {
    complete: false
  };

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  /* dumb component, not awre of what happens outside of itself, only received input via property binding
   and emits output data as events. usually start with dumb (presentational components then go on to
   container components (if db or backend api changes, don't have to worry about presentational components
   https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.dne4iv88g
   */

  addTodo() {
    this.add.emit(new Todo(this.newTodo));
    this.newTodo = {};
  }

}