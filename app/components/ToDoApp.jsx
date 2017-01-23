let React = require('react');
let ToDoList = require('ToDoList');

let ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
        id: 1,
        text: 'Walk the dog'
      }, {
        id: 2,
        text: 'Get kids'
      }, {
      id: 3,
      text: 'Go shopping'
    }, {
      id: 4,
      text: 'Make dinner'
    }
      ]
    };
  },
  render: function() {
    let {todos} = this.state;

    return (
      <div>
        <ToDoList todos={todos} />
      </div>
    )
  }
});

module.exports = ToDoApp ;
