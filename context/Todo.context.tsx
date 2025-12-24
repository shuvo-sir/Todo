import { createContext, useState } from "react";

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

interface TodoContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    toggleTodo: () => {},
    removeTodo: () => {},
});

// create a  provider
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] =useState<Todo[]>([]);



    // add todo
    const addTodo = (text: string) => {
        setTodos([...todos, { id: todos.length + 1, text, done: false }]); //{id: todos.length + 1, text, done: false }
    };

    // toggle todo
    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id){
                return { ...todo, done: !todo.done };
            }
            return todo;
        }));
    }

    // remove todo
    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );

}