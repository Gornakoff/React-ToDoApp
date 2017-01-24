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
  });

  it('should togglw completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text:'test',
      completed: false
    };

    let todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoData.id);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
