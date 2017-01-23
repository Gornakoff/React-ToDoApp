let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should exists', () => {
    expect(ToDoApp).toExist();
  })
});
