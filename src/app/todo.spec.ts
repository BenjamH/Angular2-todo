import {Todo} from './todo';

describe('Todo', () => {

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'hello',
      link: 'link',
      complete: true
    });
    expect(todo.title).toEqual('hello');
    expect(todo.link).toEqual('link');
    expect(todo.complete).toEqual(true);
  });

});
