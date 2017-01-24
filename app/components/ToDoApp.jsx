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
        text: 'Walk the dog',
        completed: false
      }, {
        id: uuid(),
        text: 'Get kids',
        completed: true
      }, {
        id: uuid(),
        text: 'Go shopping',
        completed: true
    }, {
        id: uuid(),
        text: 'Make dinner',
        completed: false
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
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id) {
    let updatedTodos = this.state.todos.map((todo) => {

      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
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
        <ToDoList todos={todos} onToggle={this.handleToggle}/>
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp ;
