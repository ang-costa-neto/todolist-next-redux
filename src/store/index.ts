import { createStore } from 'redux';
import todosReducer from './todosReducer';
import { ITodo } from '@/interfaces/ITodo';

const todoStore = createStore(todosReducer);

export type RootState = {
    todos: ITodo[];
};
export default todoStore;