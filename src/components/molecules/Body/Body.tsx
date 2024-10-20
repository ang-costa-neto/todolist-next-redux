"use client";
import { ContentBody } from "./styles"

export const Body = ({ children }: {children: React.ReactNode}) => {
    return (
        <ContentBody>
            {children}
        </ContentBody>
    )
};