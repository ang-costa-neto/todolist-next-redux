"use client";
import { ITodoProvider } from "@/interfaces/ITodoProvider";
import todoStore from "@/store";
import { Provider } from "react-redux";

export const TodoProvider = ({ children }: ITodoProvider) => {
    return <Provider store={todoStore}>{children}</Provider>
}