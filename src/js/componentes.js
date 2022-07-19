import { Todo, TodoList } from '../classes';

// Referencias al Html

const ulTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const borrarCompletados = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const liFilters = document.querySelectorAll('.filtro');

// Inicializar todo list

let todoList = {};

export const initTodoList = () => {
  todoList = new TodoList();
  todoList.todos.forEach((todo) => crearTodoHtml(todo));
};

// Crear todo item

export const crearTodoHtml = (todo) => {
  const todoHtml = `
    <li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
	    <div class="view">
		    <input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
			    <label>${todo.tarea}</label>
			    <button class="destroy"></button>
		    </div>
	    <input class="edit" value="Create a TodoMVC template">
	</li>
    `;
  const div = document.createElement('div');

  div.innerHTML = todoHtml;
  ulTodoList.append(div.firstElementChild);
  return div;
};

// Gestión de Eventos

txtInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && txtInput.value.length > 0) {
    crearTodoHtml(todoList.nuevoTodo(new Todo(txtInput.value)));
    txtInput.value = '';
  }
});

ulTodoList.addEventListener('click', (e) => {
  const nombreElemento = e.target.localName; // input, label, button
  const itemList = e.target.parentElement.parentElement;
  const itemId = itemList.getAttribute('data-id');

  switch (nombreElemento) {
    case 'input':
      !e.target.checked
        ? e.target.setAttribute('checked', '')
        : e.target.removeAttribute('checked');
      itemList.classList.toggle('completed');
      todoList.marcarDesmarcar(itemId);
      break;
    case 'label':
      break;
    case 'button':
      itemList.remove();
      txtInput.focus();
      todoList.eliminarTodo(itemId);
      break;
  }
});

borrarCompletados.addEventListener('click', (e) => {
  const [...items] = ulTodoList.children;
  items.forEach((item) => {
    if (item.classList.contains('completed')) item.remove();
  });
  todoList.eliminaCompletados();
});

ulFilters.addEventListener('click', (e) => {
  const filtro = e.target.text;
  if (!filtro) return;

  liFilters.forEach((filter) => filter.classList.remove('selected'));
  e.target.classList.add('selected');

  for (let item of ulTodoList.children) {
    const completado = item.classList.contains('completed');
    item.classList.remove('hidden');
    switch (filtro) {
      case 'Pendientes':
        if (completado) item.classList.add('hidden');
        break;
      case 'Completados':
        if (!completado) item.classList.add('hidden');
        break;
    }
  }
});
