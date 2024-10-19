import React from 'react';
import TodoItem from '../atoms/TodoItem';
import { ITodoList } from '@/interfaces/ITodoList';

const TodoList = ({ todos, onToggle, onDelete }: ITodoList) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TodoList;
