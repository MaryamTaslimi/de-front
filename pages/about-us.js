import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../components/Home/Hero";
import Footer from "../components/Common/Footer";
import AboutHero from "../components/AboutUs/AboutHero";
import Header from "../components/Common/Header";
import Mission from "../components/AboutUs/Mission";
import Gap from "../components/AboutUs/Gap";
import Vision from "../components/AboutUs/Vision";
import Services from "../components/AboutUs/Services";
import ImagesSection from "../components/AboutUs/ImagesSection";
import Team from "../components/Common/Team";
import Bottom from "../components/AboutUs/Bottom";
import MainForm from "../components/Home/MainForm";
import MainFormContainer from "../components/Home/MainFormContainer";
import FormContainerMain from "../components/Common/FormContainerMain";
import WhiteGap from "../components/Common/WhiteGap";


export default function AboutUs() {
    return (
        <>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>درباره ما</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/common/logo.png"/>
                </Head>
                <Header transparent = {true}/>
                <main className = {styles.main}>
                    <div className = {"py-12 px-6 sm:px-20"}>
                        <AboutHero/>
                        <Gap/>
                        <Mission/>
                        <Gap/>
                        <Vision/>
                        <Gap/>
                        <Services/>
                        <Gap/>
                        <ImagesSection/>
                        <Gap/>
                        <Bottom/>
                    </div>
                    <FormContainerMain/>
                    <WhiteGap/>
                </main>
                <Footer/>

            </div>

        </>
    )
}
