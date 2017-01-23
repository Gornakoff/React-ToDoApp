let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let ToDoApp = require('ToDoApp');

// load foundation
$(document).foundation();

// load app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<ToDoApp/>,
document.getElementById('app')
);
