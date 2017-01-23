let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', () => {
  it('should exists', () => {
    expect(ToDoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    let searchText = 'Dog';
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () => {
    let searchText = '';
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, searchText);
  });
});
