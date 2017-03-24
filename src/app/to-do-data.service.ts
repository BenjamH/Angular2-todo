import { Injectable } from '@angular/core';
import {Todo, ToDoModel} from './todo';

@Injectable()
export class ToDoDataService {
  todos: Todo[] = [];

  constructor() {
  }

  getToDoById(id: number): Todo {
    return this.todos
        .find(todo => todo.id === id)
  }

  addToDo(todo: Todo): ToDoDataService {
    this.todos.push(todo);
    return this;
  }

  deleteToDoById(id: number): ToDoDataService {
    // create new array instead of mutating
    // can also do using Set Object
    this.todos = this.todos
        .filter(todo => todo.id !== id);
    return this;
  }

  updateToDoById(id: number, values: Object = {}): Todo {
    //TODO make sure values are valid
    let todo = this.getToDoById(id);

    if (!todo) {
      return null;
    }

    // will mutate object
    Object.assign(todo, values);
    return todo;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  toggleTodoComplete(todo: Todo) {
    let updatededTodo = this.updateToDoById(todo.id, {
      complete: !todo.complete
    });
    return updatededTodo;
  }

}
