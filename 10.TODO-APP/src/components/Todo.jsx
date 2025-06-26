import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { FiEdit3 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField'


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(todo.content);

    const removeTodo = () => {
        onRemoveTodo(todo.id);
    }

    const updateTodo = () => {
        if (!newTodo) return;
        const request = {
            id: todo.id,
            content: newTodo,
        };
        onUpdateTodo(request)
        setEditable(false) // Remove the old todo
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc', marginTop: '15px' }}>
            <div>
                {
                    editable ? <TextField value={newTodo} onChange={(e) => setNewTodo(e.target.value)} fullWidth
                        style={{ width: '300px' }} variant="outlined"
                    /> : todo.content
                }

            </div>
            <div>
                <IconButton aria-label="delete" color="error" size="medium" onClick={removeTodo}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" color="dark" size="medium">
                    {
                        editable ? <FaCheck onClick={updateTodo} />
                            : <FiEdit3 onClick={() => setEditable(true)} />
                    }

                </IconButton>
            </div>


        </div>


    )
}

export default Todo