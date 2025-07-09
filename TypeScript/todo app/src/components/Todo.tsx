import { FaRegCircle, FaTrash } from 'react-icons/fa'

function Todo() {
    return (
        <li className="todo-item">
            <button
                aria-label="Toggle complete"
                className="todo-checkbox"
            >
                <FaRegCircle className="icon-not-completed" />
                {/* Eğer tamamlandıysa: <FaCheckCircle className="icon-completed" /> */}
            </button>

            <span className="todo-text">
                {/* Todo başlığı buraya */}
                İlk Todoyum
            </span>

            <button
                aria-label="Delete todo"
                className="todo-delete"
            >
                <FaTrash />
            </button>
        </li>
    );

}

export default Todo