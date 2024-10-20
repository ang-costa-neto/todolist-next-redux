"use client";
import TodoList from '../../molecules/TodoList';
import TodoForm from '../../atoms/TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addTask, removeTask, toogleComplete } from '@/reducers/todosReducer';
import { v4 as uuidV4 } from "uuid";

const TodoApp = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos || []);

    const handleAddTodo = (text: string) => {
        dispatch(addTask({
            id: uuidV4(),
            text
        }))
    };

    const handleToggleTodo = (id: string) => {
        dispatch(toogleComplete({
            id
        }));
    };

    const handleDeleteTodo = (id: string) => {
        dispatch(removeTask({
            id
        }));
    };

    return (
        <>
            <TodoForm onAdd={handleAddTodo} />
            <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        </>
    );
};

export default TodoApp;
