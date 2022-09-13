import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: gray;
    font-size: 16px;
`;
const NavBtn = styled.button`
    &:hover {
        color: red;
    }
    &.active {
        color: blue;
    }
`;
export default function NavBar() {
    const { pathname } = useRouter();
    console.log(pathname);
    return (
        <Nav>
            <Link href="/">
                <NavBtn className={pathname === "/" ? "active" : "none"}>Home</NavBtn>
            </Link>
            <Link href="/about">
                <NavBtn className={pathname === "/about" ? "active" : "none"}>About</NavBtn>
            </Link>
            <Link href="/movies/popular">
                <NavBtn className={pathname === "/movies/popular" ? "active" : "none"}>
                    Popular
                </NavBtn>
            </Link>
        </Nav>
    );
}
