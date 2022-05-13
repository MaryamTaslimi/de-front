import Head from 'next/head'
import Header from "/components/Header"
import styles from '../styles/Home.module.css'
import Hero1 from "../components/Hero1";

export default function Home() {
    return (
        <>
            <Header/>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>خانه</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/logo.png"/>
                </Head>

                <main className = {styles.main}>
                    <Hero1/>
                </main>
            </div>

        </>
    )
}
