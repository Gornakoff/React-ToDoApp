let $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      let allTodos = JSON.stringify(todos);
      localStorage.setItem("todos", allTodos);
      return todos;
    }
  },
  getTodos: function() {
    let stringTodos = localStorage.getItem("todos");
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    
    return $.isArray(todos) ? todos : [];
    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
  }
};
