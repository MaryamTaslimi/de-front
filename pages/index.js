import Head from 'next/head'
import Header from "/components/Header"
import styles from '../styles/Home.module.css'
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";

export default function Home() {
    return (
        <>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>خانه</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/logo.png"/>
                </Head>
                <Header transparent = {true}/>
                <main className = {styles.main + " static max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"}>
                    <Hero1/>
                    {/*<Hero2/>*/}

                </main>
            </div>

        </>
    )
}
