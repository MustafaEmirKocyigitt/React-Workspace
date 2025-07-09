import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/Types'

const initialState: TodoInitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => { }
    }
})
export const { } = todoSlice.actions

export default todoSlice.reducer