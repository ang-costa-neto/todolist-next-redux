import { Body } from '@/components/molecules/Body/Body';
import { Content } from '@/components/molecules/Content/Content';
import { NavBar } from '@/components/organisms/NavBar/NavBar';
import { TodoProvider } from '@/providers/TodoProvider';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <TodoProvider>
            <html>
                <Body>
                    <NavBar />
                    <Content>
                        {children}
                    </Content>
                </Body>
            </html>
        </TodoProvider>
    );
};

export default Layout;
