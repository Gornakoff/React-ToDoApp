let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let ToDo = require('ToDo');

describe('ToDo', () => {
  it('should exists', () => {
    expect(ToDo).toExist();
  })
});
