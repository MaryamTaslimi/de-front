import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../components/Home/Hero";
import Footer from "../components/Home/Footer";
import AboutHero from "../components/AboutUs/AboutHero";
import Header from "../components/Home/Header";
import Mission from "../components/AboutUs/Mission";
import Gap from "../components/AboutUs/Gap";
import Vision from "../components/AboutUs/Vision";


export default function AboutUs() {
    return (
        <>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>درباره ما</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/logo.png"/>
                </Head>
                <Header transparent = {true}/>
                <main className = {styles.main}>
                    <div className = {"py-12 px-6 sm:px-20"}>
                        <AboutHero/>
                        <Gap/>
                        <Mission/>
                        <Gap/>
                        <Vision/>

                    </div>
                </main>
                <Footer/>

            </div>

        </>
    )
}
