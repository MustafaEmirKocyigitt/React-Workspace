import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
function TodoCreate() {
    return (
        <Button variant="contained" endIcon={<AddBoxIcon />}>
            Ekle
        </Button>
    )
}

export default TodoCreate