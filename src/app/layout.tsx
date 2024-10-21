import { Body } from '@/components/molecules/Body/Body';
import { Content } from '@/components/molecules/Content/Content';
import { NavBar } from '@/components/organisms/NavBar/NavBar';
import { AuthProvider } from '@/providers/AuthProvider';
import { TodoProvider } from '@/providers/TodoProvider';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <TodoProvider>
            <AuthProvider>
                <html>
                    <Body>
                        <NavBar />
                        <Content>
                            {children}
                        </Content>
                    </Body>
                </html>
            </AuthProvider>
        </TodoProvider>
    );
};

export default Layout;
