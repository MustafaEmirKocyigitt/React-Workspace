import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import React from 'react'


function Todo() {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <IconButton aria-label="delete" color="error" size="medium">
                <DeleteIcon />
            </IconButton>
        </Stack>
    )
}

export default Todo