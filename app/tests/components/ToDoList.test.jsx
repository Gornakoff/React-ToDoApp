let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let ToDoList = require('ToDoList');
let ToDo = require('ToDo');

describe('ToDoList', () => {
  it('should exists', () => {
    expect(ToDoList).toExist();
  });

  it('should render one ToDo component foreach todo item', () => {
    let todos = [{
      id: 1,
      text: 'something'
    }, {
      id: 2,
      text: 'anything'
    }];

    let todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
