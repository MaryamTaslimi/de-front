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
import Partners from "../components/Common/Partners";

const items = [
    {name: "پایگاه خبری دنیای بورس", src: '/partnership/logo-p3.png', className: "w-20 md:w-24", url: "https://donyayebourse.com/"},
    {name: "هفته نامه تجارت فردا", src: '/partnership/logo-p8.png', className: "w-12", url: "https://www.tejaratefarda.com/"},
    {name: "انتشارات دنیای اقتصاد", src: '/partnership/logo-p9.png', className: "w-12", url: "https://book.donya-e-eqtesad.com/"},
    {name: "تکنوتجارت", src: '/partnership/logo-p11.png', className: "w-40 md:w-48", url: "https://technotejarat.ir/"},
    {name: "مرکز نوآوری جهش", src: '/partnership/logo-p10.png', className: "w-40 md:w-48", url: "https://jahesh.co/"},
    {name: "شرکت سرمایه‌گذاری خطرپذیر آفرینش", src: '/partnership/logo-p12.png', className: "w-20 md:w-24", url: "http://afarineshvc.inotex.com/"},
    {name: "مدیریت ثروت ستارگان", src: '/partnership/logo-p13.png', className: "w-20 md:w-24", url: "https://stars-wm.com/"},
    {name: "شرکت سرمایه‌گذاری خطرپذیر شناسا", src: '/partnership/logo-p14.png', className: "w-16 md:w-24", url: "https://shenasa.ir/"},
    {name: "نمایشگاه تجهیزات و مواد آزمایشگاهی ایران ساخت", src: '/partnership/logo-p20.png', className: "w-20 md:w-24", url: "https://iranlabexpo.ir/"},
    {name: "برنامه توسعه زیست بوم شرکت های خلاق", src: '/partnership/logo-p19.png', className: "w-20 md:w-24", url: "http://ircreative.isti.ir/"},
    {name: "واحد توسعه دانش دنیای اقتصاد", src: '/partnership/logo-p18.png', className: "w-36 md:w-48", url: "https://lms.donya-e-eqtesad.com/"},
]

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
                           body = {"صاحبان کسب‌وکارها"}
                           url = {"https://www.aparat.com/embed/39fDw?data[rnddiv]=21585345723&data[responsive]=yes"}
                />
                <main className = {styles.main}>
                    <div className = {"py-12 px-6 sm:px-20"}>
                        <div className = {"hidden lg:block"}>
                            <Gap/>
                        </div>
                        <MainText/>
                        <MainTextMobile/>
                        <Partners type = {2} items={items}/>
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