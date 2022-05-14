import Head from 'next/head'
import Header from "/components/Header"
import styles from '../styles/Home.module.css'
import Gear from "../components/Gear";
import Chevron from "../components/Chevron";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>خانه</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/logo.png"/>
                </Head>
                <Hero/>
                <main className = {styles.main + " relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"}>
                    <Chevron/>
                    <Chevron/>
                    <Gear top={"top-0"} x={"-left-80"} size={"w-[50rem]"}/>
                    <Gear top={"top-[47rem]"} x={"-left-[30rem]"} size={"w-[60rem]"}/>
                    <Gear top={"top-[48rem]"} x={"-right-[35rem]"} size={"w-[100vw]"}/>



                </main>
            </div>

        </>
    )
}
