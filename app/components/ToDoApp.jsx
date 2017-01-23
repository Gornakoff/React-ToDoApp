let React = require('react');
let ToDoList = require('ToDoList');
let AddToDo = require('AddToDo');
let ToDoSearch = require('ToDoSearch');

let ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
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
  handleAddToDo: function(text) {
    alert('new todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    let {todos} = this.state;

    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch} />
        <ToDoList todos={todos} />
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp ;
