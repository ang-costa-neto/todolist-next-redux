import { ITodo } from "./ITodo";

export interface ITodoList {
    todos: ITodo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}