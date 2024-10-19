export interface ITodoItemProps {
    todo: { id: string; text: string; completed: boolean };
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}
