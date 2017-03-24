import {Todo} from './todo';

describe('Todo', () => {

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      id: 1,
      title: 'hello',
      link: 'link',
      complete: true
    });
    expect(todo.id).toEqual(1);
    expect(todo.title).toEqual('hello');
    expect(todo.link).toEqual('link');
    expect(todo.complete).toEqual(true);
  });

});
