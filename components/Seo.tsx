import { useRouter } from "next/router";
import Head from "next/head";
export default function Seo() {
    const { pathname } = useRouter();
    const titleName = pathname === "/" ? "HOME" : pathname.slice(1).toUpperCase();
    
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{titleName} | NEXT MOVIES</title>
        </Head>
    );
}
