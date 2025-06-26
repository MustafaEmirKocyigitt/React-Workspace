
import './App.css'
import TodoCreate from './components/TodoCreate.jsx'
import TodoList from './components/TodoList.jsx'
import Stack from '@mui/material/Stack';
import { useState } from 'react';
function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter(todo => todo.id !== todoId)])
  }
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos]);
  }
  return (
    <div className="App">
      <div stale={{ width: '100%', diplay: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TodoCreate onCreateTodo={createTodo} />
        </Stack>
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div >


  )
}

export default App
