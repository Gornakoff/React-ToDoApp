let expect = require('expect');

let ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exists', () => {
    expect(ToDoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [{
        id: 1,
        text: 'test',
        completed: false
      }];

      ToDoAPI.setTodos(todos);

      let actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should NOT set invalid todos array', () => {
      let badTodos = {a: 'b'};

      ToDoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      let actualTodos = ToDoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localStorage', () => {
      let todos = [{
        id: 1,
        text: 'test',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      let actualTodos = ToDoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
});
