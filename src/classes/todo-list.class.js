import { Todo } from './todo.class';

export class TodoList {
  constructor() {
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
    return todo;
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
  }

  marcarDesmarcar(id) {
    for (let todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminaCompletados() {
    let cambios = false;
    for (let todo of this.todos) {
      if (todo.completado) {
        this.eliminarTodo(todo.id);
        cambios = true;
      }
    }
    if (cambios) this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  cargarLocalStorage() {
    this.todos = JSON.parse(localStorage.getItem('todo') || []);
    this.todos = this.todos.map((todo) => Todo.fromJson(todo));
  }
}
