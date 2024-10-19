import todosReducer from './todosReducer';
import { configureStore } from '@reduxjs/toolkit';

const todoStore = configureStore({
    reducer: {
        todos: todosReducer,
    }
});

export type RootState = ReturnType<typeof todoStore.getState>;
export default todoStore;