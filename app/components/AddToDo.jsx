let React = require('react');

let AddToDo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddToDo(todoText);
      this.refs.todoText.focus();
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Enter new todo text..."/>
          <button className="button expanded">Add todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddToDo;
