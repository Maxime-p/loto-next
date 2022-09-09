import type {NextPage} from 'next'
import Head from 'next/head'
import Control from "@Components/Control";
import Grid from "@Components/Grid";

const Home: NextPage = () => {
    return <>
        <Head>
            <title>Grille de loto</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
            <Control />
            <Grid/>
        </main>
    </>
}

export default Home
