(
    async function () {
        const response = await fetch('https://dummyjson.com/todos');
        const todosObject = await response.json();
        const todoList = todosObject.todos.map(todo => todo.todo);
        console.log(todoList);
    }
)();