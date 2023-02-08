import Link from "next/Link";
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>とらゼミ First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href='/'>←Back to home!</Link>
            </h2>
        </Layout>
    )
}

export default FirstPost;