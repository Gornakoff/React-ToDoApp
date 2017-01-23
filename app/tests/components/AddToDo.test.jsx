let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let AddToDo = require('AddToDo');

describe('AddToDo', () => {
  it('should exists', () => {
    expect(AddToDo).toExist();
  });

  it('should call onAddToDo prop with valid data', () => {
    let todoText = 'Check mail';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should NOT call onAddToDo prop when invalid input', () => {
    let todoText = '';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
