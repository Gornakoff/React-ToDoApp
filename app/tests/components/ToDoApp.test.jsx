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
});
