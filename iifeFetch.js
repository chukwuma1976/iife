(
    async function () {
        const response = await fetch('https://dummyjson.com/todos');
        const todos = await response.json();
        const todoList = todos.todos.map(todo => todo.todo);
        console.log(todoList);
    }
)();