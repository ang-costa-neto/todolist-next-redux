import React from 'react';
import { TodoProvider } from '@/providers/TodoProvider';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <TodoProvider>
            <html lang="pt-BR">
                <body>
                    <header>
                        <h1>Meu App de Tarefas</h1>
                    </header>
                    <main>{children}</main>
                    <footer>
                        <p>&copy; 2024 Meu App de Tarefas</p>
                    </footer>
                </body>
            </html>
        </TodoProvider>
    );
};

export default Layout;
