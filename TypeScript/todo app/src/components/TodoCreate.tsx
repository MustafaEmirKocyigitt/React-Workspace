import '../css/Todo.css';
import { FaPlus } from 'react-icons/fa';

function TodoCreate() {

    return (
        <form className="todo-form" noValidate>
            <h2 className="todo-title">Add New Todo</h2>

            <div className="input-group">
                <input
                    type="text"
                    placeholder="What do you need to do?"
                    className="todo-input"
                    aria-label="Todo Title"
                />
                <button
                    type="submit"
                    className="todo-button"
                    aria-label="Add todo"
                    title="Add todo"
                >
                    <FaPlus />
                </button>
            </div>

            <p className="error-message" role="alert" style={{ visibility: "hidden" }}>
                {/* Hata mesajı buraya gelecek */}
            </p>
        </form>
    );
}

export default TodoCreate