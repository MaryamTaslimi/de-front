import styles from "../styles/Home.module.css";
import Head from "next/head";
import WhiteGap from "../components/Common/WhiteGap";
import Footer from "../components/Common/Footer";
import HeroInner from "../components/Common/HeroInner";
import MainText from "../components/Startup/MainText";
import Gap from "../components/Common/Gap";
import ChevronForm from "../components/Common/ChevronForm";
import StartupFormContainer from "../components/Startup/StartupFormContainer";
import Path from "../components/Startup/Path";

export default function Startup() {
    return (
        <>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>سرمایه‌پذیر</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/common/logo.png"/>
                </Head>
                <HeroInner number = {3} title = {"سرمایه‌پذیر"}
                           body = {"شرکت‌های دانش‌بنیان، ایده‌پردازان و گروه‌های استارتاپی"}/>
                <main className = {styles.main}>
                    <div className = {"py-12 px-6 sm:px-20"}>
                        <Gap/>
                        <MainText/>
                        <Gap/>
                        <Path/>
                        <ChevronForm/>
                    </div>
                    <StartupFormContainer/>
                    <WhiteGap/>
                </main>
                <Footer/>

            </div>

        </>
    )
}