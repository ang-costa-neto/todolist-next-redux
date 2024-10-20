"use client";
import { ContentContainer } from "./styles"

export const Content = ({ children }: {children: React.ReactNode}) => {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    )
}