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
  },
  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase();
      
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Filter by NOT completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
