const todos = [];
let nextId = 0;

const todo = {
  addTodo(text) {
    const newTodo = {
      id: ++nextId,
      text,
      completed: false,
    };
    todos.push(newTodo);
    return newTodo;
  },

  deleteTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  },

  modifyTodo(id, text) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos[index].text = text;
    }
  },

  toggleTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos[index].completed = !todos[index].completed;
    }
  },

  printTodoList() {
    todos.forEach((todo) => {
      if (!todo.completed) {
        console.log(todo);
      }
    });
  },
};

export default todo;
