const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todosUl = document.querySelector('#todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
    todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }

    if(todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEl.remove();
            updateLS();
        });

        todosUl.append(todoEl);

        input.value = '';

        updateLS();
    }
}

function updateLS() {
    let todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach(el => {
        todos.push({
            text: el.innerText,
            completed: el.classList.contains('completed')
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}