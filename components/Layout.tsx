import { PropsWithChildren } from "react";
import NavBar from "./NavBar";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Layout({ children }: PropsWithChildren) {
    const { pathname } = useRouter();
    console.log(pathname);
    const titleName = pathname === "/" ? "HOME" : pathname.slice(1).toUpperCase();
    return (
        <>
            <Head>
                <title>{titleName} | NEXT MOVIES</title>
            </Head>
            <NavBar />
            <div>{children}</div>
        </>
    );
}
