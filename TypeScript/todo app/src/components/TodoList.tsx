import Todo from "./Todo"

function TodoList() {
    return (
        <ul className="todo-list" role="list" aria-label="Todo list">
            {/* Buraya Todo bileşenleri map ile gelecek */}
            {/* Eğer liste boşsa: <p className="empty-message">No todos yet. Add some!</p> */}
            <Todo />
        </ul>
    )
}

export default TodoList