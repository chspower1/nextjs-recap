import { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import Seo from "./Seo";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Seo />
            <NavBar />
            <div>{children}</div>
        </>
    );
}
