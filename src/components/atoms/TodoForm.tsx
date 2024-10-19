"use client";
import { ITodoForm } from '@/interfaces/ITodoForm';
import { useState } from 'react';

const TodoForm = ({ onAdd }: ITodoForm) => {
    const [text, setText] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
