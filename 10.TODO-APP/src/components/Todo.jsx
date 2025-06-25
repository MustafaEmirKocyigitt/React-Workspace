import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { FiEdit3 } from "react-icons/fi";


function Todo() {
    return (
        // <Stack direction="row" alignItems="center">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc', marginTop: '15px' }}>
            <div>Ben İlk Todoyum </div>
            <div>
                <IconButton aria-label="delete" color="error" size="medium">
                    <DeleteIcon />
                </IconButton>
                <IconButton on aria-label="delete" color="dark" size="medium">
                    <FiEdit3 />
                </IconButton>
            </div>


        </div>


    )
}

export default Todo