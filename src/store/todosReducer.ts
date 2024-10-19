import { ITodo } from "@/interfaces/ITodo";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ITodo[] = [];

const todosReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            action.payload.completed = false
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, text } = action.payload;
            const task = state.find(task => task.id === id);
            if (task) {
                task.text = text;
            }
        },
        removeTask: (state, action) => {
            return state.filter((task: {id: string}) => task.id !== action.payload.id);
        },
        toogleComplete: (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.completed = true
            }
        }
    },
});

export const { addTask, removeTask, editTask, toogleComplete } =  todosReducer.actions 
export default todosReducer.reducer;