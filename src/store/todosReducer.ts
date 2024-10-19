import { ITodo } from "@/interfaces/ITodo";
import { ITodoState } from "@/interfaces/ITodoState";

const initialState: ITodoState = {
    todos: []
};

type Action =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number };

const todosReducer = (state = initialState, action: Action): ITodoState => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo: ITodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            return { ...state, todos: [...state.todos, newTodo] };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
}

export default todosReducer;