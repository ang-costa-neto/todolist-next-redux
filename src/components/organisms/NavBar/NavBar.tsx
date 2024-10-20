"use client";
import { HeaderContainer, NavBarContainer, NavBarItem, NavBarLink } from "./styles"

export const NavBar = () => {
    return (
        <HeaderContainer>
            <NavBarContainer>
                <NavBarItem>
                    <NavBarLink href="/">
                        Home
                    </NavBarLink>
                    <NavBarLink href="/blog">
                        Blog
                    </NavBarLink>
                    <NavBarLink href="/about">
                        Sobre
                    </NavBarLink>
                </NavBarItem>
            </NavBarContainer>
        </HeaderContainer>
    )
}