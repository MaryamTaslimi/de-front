import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Gear from "../components/Home/Gear";
import Hero from "../components/Home/Hero";
import Introduction from "../components/Home/Introduction";
import InfoBox from "../components/Home/InfoBox";
import ServicesBox from "../components/Home/ServicesBox";
import MainFormContainer from "../components/Common/MainFormContainer";
import Partners from "../components/Home/Partners";
import FAQ from "../components/Home/FAQ";
import Footer from "../components/Common/Footer";
import ServicesExpandable from "../components/Home/ServicesExpand";
import Header from "../components/Common/Header";
import MainFormSection from "../components/Home/MainFormSection";
import MobileHero from "../components/Home/MobileHero";
import ServicesExpandMobile from "../components/Home/ServicesExpandMobile";

export default function Home() {
    return (
        <>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>خانه</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/common/logo.png"/>
                    <meta httpEquiv ="Content-Security-Policy" content="upgrade-insecure-requests"/>
                </Head>
                <Hero/>

                <div className = {"lg:hidden"}>
                    <Header transparent = {true}/>
                </div>

                <main className = {styles.main + " relative"}>
                    <div className = {"py-4 md:py-12 px-4 md:px-20"}>
                        <MobileHero/>
                        <Gear top = {"top-0"} x = {"left-[0]"} size = {"w-[40rem]"}/>
                        <Gear top = {"top-[37rem]"} x = {"-left-[10rem]"} size = {"w-[30rem]"}/>
                        <Gear top = {"top-[35rem]"} x = {"left-[19rem]"} size = {"w-[50vw]"}/>
                        <Introduction/>
                        <InfoBox/>
                        <ServicesBox/>
                        <ServicesExpandable/>
                    </div>
                    <ServicesExpandMobile/>
                    <MainFormSection/>
                    <Partners/>
                    <FAQ/>
                </main>
                <Footer/>

            </div>

        </>
    )
}
