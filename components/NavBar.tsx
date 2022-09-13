import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = styled.nav`
    z-index: 2000;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 16px;
`;
const Logo = styled.div`
    margin-left: 100px;
    font-size: 28px;
`;
const Menu = styled.div`
    margin-right: 100px;
    font-size: 28px;
`;
const NavBtn = styled.button`
    margin: 0px 20px;
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
                <Logo>CINEMA</Logo>
            </Link>
            <Menu>
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
            </Menu>
        </Nav>
    );
}
