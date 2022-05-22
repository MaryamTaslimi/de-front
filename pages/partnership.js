import styles from "../styles/Home.module.css";
import Head from "next/head";
import WhiteGap from "../components/Common/WhiteGap";
import Footer from "../components/Common/Footer";
import HeroInner from "../components/Common/HeroInner";
import MainText from "../components/Partnership/MainText";
import Gap from "../components/Common/Gap";
import ChevronForm from "../components/Common/ChevronForm";
import PartnershipFormContainer from "../components/Partnership/PartnershipFormContainer";
import MainTextMobile from "../components/Partnership/MainTextMobile";

export default function Partnership() {
    return (
        <>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>شراکت استراتژیک</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/common/logo.png"/>
                </Head>
                <HeroInner number = {2} title = {"شراکت استراتژیک"}
                           body = {"صاحبان کسب‌وکارها"}/>
                <main className = {styles.main}>
                    <div className = {"py-12 px-6 sm:px-20"}>
                        <Gap/>
                        <MainText/>
                        <MainTextMobile/>
                        <ChevronForm/>
                    </div>
                    <PartnershipFormContainer/>
                    <WhiteGap/>
                </main>
                <Footer/>

            </div>

        </>
    )
}