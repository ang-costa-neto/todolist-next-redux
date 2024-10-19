"use client";
import TodoList from '../molecules/TodoList';
import TodoForm from '../atoms/TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';

const TodoApp = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos || []);

    const handleAddTodo = (text: string) => {
        dispatch({ type: 'ADD_TODO', payload: text });
    };

    const handleToggleTodo = (id: number) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    const handleDeleteTodo = (id: number) => {
        dispatch({ type: 'DELETE_TODO', payload: id });
    };

    return (
        <div>
            <TodoForm onAdd={handleAddTodo} />
            <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        </div>
    );
};

export default TodoApp;
