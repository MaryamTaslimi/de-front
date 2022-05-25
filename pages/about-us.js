import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Common/Footer";
import AboutHero from "../components/AboutUs/AboutHero";
import Header from "../components/Common/Header";
import Mission from "../components/AboutUs/Mission";
import Gap from "../components/Common/Gap";
import Vision from "../components/AboutUs/Vision";
import Services from "../components/AboutUs/Services";
import ImagesSection from "../components/AboutUs/ImagesSection";
import Bottom from "../components/AboutUs/Bottom";
import WhiteGap from "../components/Common/WhiteGap";
import MainFormContainer from "../components/Common/MainFormContainer";


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
                    <div className = {"py-4 md:py-12 px-4 md:px-20"}>
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
                    <MainFormContainer/>
                    <WhiteGap/>
                </main>
                <Footer/>

            </div>

        </>
    )
}
