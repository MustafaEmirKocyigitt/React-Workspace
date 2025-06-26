import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import { useState } from 'react';
function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 10000),
            content: newTodo,
        };
        onCreateTodo(request);
        clearInput();
    }
    return (
        <>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    fullWidth label="Görev" />
            </Box>
            <Button onClick={createTodo} variant="contained" endIcon={<AddBoxIcon />}>
                Ekle
            </Button>
        </>

    )
}

export default TodoCreate