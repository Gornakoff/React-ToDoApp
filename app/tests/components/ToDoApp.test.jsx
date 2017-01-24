let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should exists', () => {
    expect(ToDoApp).toExist();
  });

  it('should add todo to the todos state on handleAddToDo', () => {
    let todoText = 'test text';
    let todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddToDo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text:'test',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    let todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle from completed to incompleted', () => {
    let todoData = {
      id: 11,
      text:'test',
      completed: true,
      createdAt: 0,
      completedAt: 111
    };

    let todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
