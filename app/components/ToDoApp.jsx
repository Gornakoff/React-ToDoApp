let React = require('react');
let uuid = require('node-uuid');

let ToDoList = require('ToDoList');
let AddToDo = require('AddToDo');
let ToDoSearch = require('ToDoSearch');
let ToDoAPI = require('ToDoAPI');

let ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    ToDoAPI.setTodos(this.state.todos)
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
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch} />
        <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp ;
