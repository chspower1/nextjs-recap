import NavBar from "../components/NavBar";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
