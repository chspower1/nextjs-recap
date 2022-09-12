import Link from "next/link";
import { useRouter } from "next/router";


export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    );
}
