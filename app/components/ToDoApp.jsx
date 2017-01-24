let React = require('react');
let ToDoList = require('ToDoList');
let AddToDo = require('AddToDo');
let ToDoSearch = require('ToDoSearch');
let uuid = require('node-uuid');

let ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
        id: uuid(),
        text: 'Walk the dog'
      }, {
        id: uuid(),
        text: 'Get kids'
      }, {
      id: uuid(),
      text: 'Go shopping'
    }, {
      id: uuid(),
      text: 'Make dinner'
    }
      ]
    };
  },
  handleAddToDo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
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
