import styles from "../styles/Home.module.css";
import Head from "next/head";
import WhiteGap from "../components/Common/WhiteGap";
import Footer from "../components/Common/Footer";
import HeroInner from "../components/Common/HeroInner";
import MainText from "../components/Investor/MainText";
import Gap from "../components/Common/Gap";
import Bottom from "../components/Investor/Bottom";
import Path from "../components/Investor/Path";
import InvestorFormContainer from "../components/Investor/InvestorFormContainer";
import ChevronForm from "../components/Common/ChevronForm";
import MainTextMobile from "../components/Investor/MainTextMobile";

export default function Investor() {
    return (
        <>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>سرمایه گذاران</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/common/logo.png"/>
                </Head>
                <HeroInner number = {1} title = {"سرمایه‌گذاران"}
                           body = {"سرمایه‌گذاران حقیقی و حقوقی،شتاب‌دهنده‌ها وسرمایه‌گذاران خطرپذیر"}/>

                <main className = {styles.main}>
                    <div className = {"py-6 px-4 md:px-20 md:py-12"}>
                        <div className = {"hidden lg:block"}>
                            <Gap/>
                        </div>
                        <MainText/>
                        <MainTextMobile/>
                        <Gap/>
                        <Bottom/>
                        <Gap/>
                        <Path/>
                        <ChevronForm/>
                    </div>
                    <InvestorFormContainer/>
                    <WhiteGap/>
                </main>
                <Footer/>

            </div>

        </>
    )
}