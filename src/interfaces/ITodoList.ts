import { ITodo } from "./ITodo";

export interface ITodoList {
    todos: ITodo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}