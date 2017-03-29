import { Injectable } from '@angular/core';
import {Todo, ITodo} from './todo';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';

@Injectable()
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = this.storage.retrieve('todos')
          .map(todo => new Todo({
            title: todo.title, link: todo.link, complete: todo.complete
          })) || [];

  constructor(private storage: LocalStorageService) {
  }

  getTodoById(id: number): Todo {
    return this.todos
        .find(todo => todo.id === id)
  }

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.todos.push(todo);
    console.log(todo);
    this.storage.store('todos', this.todos);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    // create new array instead of mutating
    // can also do using Set Object
    this.todos = this.todos
        .filter(todo => todo.id !== id);
    this.storage.store('todos', this.todos);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    //TODO make sure values are valid
    let todo = this.getTodoById(id);

    if (!todo) {
      return null;
    }

    // will mutate object
    Object.assign(todo, values);
    this.storage.store('todos', this.todos);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  toggleTodoComplete(todo: Todo) {
    let updatededTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatededTodo;
  }

}
