import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header``;

export const NavBarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: red;
    margin-bottom: 15px;
`;

export const NavBarItem = styled.div`
    display: flex;
    flex-direction: row;
`

export const NavBarLink = styled(Link)`
    padding: 10px;
    color: white;
    text-decoration: none;
`