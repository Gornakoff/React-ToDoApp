let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let ToDo = require('ToDo');

describe('ToDo', () => {
  it('should exists', () => {
    expect(ToDo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    let todoData = {
      id: 199,
      text: 'todo.test.jsx test',
      completed: true
    };

    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<ToDo {...todoData} onToggle={spy} />);
    let $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);
  });
});
