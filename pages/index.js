import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Gear from "../components/Home/Gear";
import Chevron from "../components/Home/Chevron";
import Hero from "../components/Home/Hero";
import Introduction from "../components/Home/Introduction";
import InfoBox from "../components/Home/InfoBox";
import ServicesBox from "../components/Home/ServicesBox";
import FormContainer from "../components/Home/FormContainer";



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
                <main className = {styles.main +" relative"}>
                    <div className = {"py-12 px-6 sm:px-20"}>
                        <a href = {"#InfoBox"}>
                            <Chevron/>
                            <Chevron/>
                        </a>

                        <Gear top = {"top-0"} x = {"left-[0]"} size = {"w-[40rem]"}/>
                        <Gear top = {"top-[37rem]"} x = {"-left-[10rem]"} size = {"w-[30rem]"}/>
                        <Gear top = {"top-[35rem]"} x = {"left-[19rem]"} size = {"w-[50vw]"}/>
                        <Introduction/>
                        <div id = {"InfoBox"}>
                            <InfoBox/>
                        </div>
                        <ServicesBox/>
                    </div>
                    <FormContainer/>
                </main>

            </div>

        </>
    )
}
