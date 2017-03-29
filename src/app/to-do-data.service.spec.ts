import { TestBed, inject } from '@angular/core/testing';
import { Todo } from'./todo';
import { TodoDataService } from './to-do-data.service';
import { Ng2Webstorage } from 'ng2-webstorage';

describe('TodoDataService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        Ng2Webstorage
      ],
      providers: [TodoDataService]
    });
  });

  beforeEach(inject([TodoDataService], (TodoDataServiceInjection: TodoDataService) => {
    service = TodoDataServiceInjection;
  }));

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#getTodos()', () => {

    it('should return an empty array by default', () => {
      expect(service.getAllTodos()).toEqual([]);
    });

    it('should return all todos', () => {
      let todo1 = new Todo({
        title: 'title',
        link: 'link',
        complete: false
      }),
          todo2 = new Todo({
          title: 'title',
          link: 'link',
          complete: true
          });

      service.todos = [todo1,todo2];
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    });
  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', () => {
      let todo1 = new Todo({
            title: 'title',
            link: 'link',
            complete: false
          }),
          todo2 = new Todo({
            title: 'title',
            link: 'link',
            complete: true
          });

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(todo1.id).toEqual(1);
      expect(todo2.id).toEqual(2);
    });

  });

  describe('#getTodoById', () => {

    it('should get todo by id', () => {
      let todo = new Todo({
        title: 'title',
        link: 'link',
        complete: false
      });

      service.addTodo(todo);

      expect(service.getTodoById(1)).toEqual(todo);
    });

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', () => {
      let todo1 = new Todo({
            title: 'title',
            link: 'link',
            complete: false
          }),
          todo2 = new Todo({
            title: 'title',
            link: 'link',
            complete: true
          });
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    });

    it('should not remove anything if todo with corresponding id is not found', () => {
      let todo1 = new Todo({
            title: 'title',
            link: 'link',
            complete: false
          }),
          todo2 = new Todo({
            title: 'title',
            link: 'link',
            complete: true
          });
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    });

    describe('#updateTodoById(id, values)', () => {

      it('should return todo with the corresponding id and updated data', () => {
        let todo = new Todo({
          title: 'title',
          link: 'link',
          complete: false
        });
        service.addTodo(todo);
        let updatedTodo = service.updateTodoById(1, {
          title: 'new title'
        });
        expect(updatedTodo.title).toEqual('new title');
      });

      it('should return null if todo is not found', () => {
        let todo = new Todo({
          title: 'title',
          link: 'link',
          complete: false
        });
        service.addTodo(todo);
        let updatedTodo = service.updateTodoById(2, {
          title: 'new title'
        });
        expect(updatedTodo).toEqual(null);
      });

    });

    describe('#toggleTodoComplete(todo)', () => {

      it('should return the updated todo with inverse complete status', () => {
        let todo = new Todo({
          title: 'title',
          link: 'link',
          complete: false
        });
        service.addTodo(todo);
        let updatedTodo = service.toggleTodoComplete(todo);
        expect(updatedTodo.complete).toEqual(true);
        service.toggleTodoComplete(todo);
        expect(updatedTodo.complete).toEqual(false);
      });

    });

  });


});
