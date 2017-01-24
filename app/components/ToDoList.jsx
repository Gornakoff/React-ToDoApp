let React = require('react');
let ToDo = require('ToDo');

let ToDoList = React.createClass({
  render: function() {
    let {todos} = this.props;
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = ToDoList;
