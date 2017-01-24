let React = require('react');
let uuid = require('node-uuid');
let moment = require('moment');

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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function(id) {
    let updatedTodos = this.state.todos.map((todo) => {

      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        <h1 className="page-title">ToDo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <ToDoSearch onSearch={this.handleSearch} />
              <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddToDo onAddToDo={this.handleAddToDo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp ;
