let React = require('react');
let ToDo = require('ToDo');

let ToDoList = React.createClass({
  render: function() {
    let {todos} = this.props;
    let renderTodos = () => {
      return todos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo}/>
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
