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

  describe('filterTodos', () => {
    let todos = [{
      id: 1,
      text: 'first test',
      completed: true
    }, {
      id: 2,
      text: 'second test',
      completed: false
    }, {
      id: 3,
      text: 'third test',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = ToDoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return all items that are NOT completed', () => {
      let filteredTodos = ToDoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sorts by completed status', () => {
      let filteredTodos = ToDoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      let filteredTodos = ToDoAPI.filterTodos(todos, true, 'third');

      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos if searchText is empty', () => {
      let filteredTodos = ToDoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });
  });
});
