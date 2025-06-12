
import './App.css'
import TodoCreate from './components/TodoCreate.jsx'
import TodoList from './components/TodoList.jsx'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
function App() {
  return (
    <div className="App">
      <h1 className="App-title">Welcome to the TODO APP</h1>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField fullWidth label="Görev" />
          </Box>
          <TodoCreate />
        </Stack>

        <TodoList />
      </Stack>
    </div>


  )
}

export default App
