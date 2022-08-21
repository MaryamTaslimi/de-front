import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Gear from "../components/Home/Gear";
import Hero from "../components/Home/Hero";
import Introduction from "../components/Home/Introduction";
import InfoBox from "../components/Home/InfoBox";
import ServicesBox from "../components/Home/ServicesBox";
import Partners from "../components/Common/Partners";
import FAQ from "../components/Home/FAQ";
import Footer from "../components/Common/Footer";
import ServicesExpandable from "../components/Home/ServicesExpand";
import Header from "../components/Common/Header";
import MainFormSection from "../components/Home/MainFormSection";
import MobileHero from "../components/Home/MobileHero";
import ServicesExpandMobile from "../components/Home/ServicesExpandMobile";
const items = [
    {name: "شبکه اینترنتی اکوایران", src: '/home/logo-p1.png', className: "w-20 md:w-24", url: "https://ecoiran.com/"},
    {name: "انجمن سرمایه گذاران خطرپذیر", src: '/home/logo-p2.png', className: "w-20 md:w-24", url: "https://irvc.ir/"},
    {name: "اتاق بازرگانی ایران", src: '/home/logo-p4.png', className: "w-20 md:w-24", url: "https://iccima.ir/"},
    {name: "خانه نوآوری و فناوری سلیم", src: '/home/logo-p5.png', className: "w-20 md:w-24", url: "https://salim.company/"},
    {name: "روزنامه دنیای اقتصاد", src: '/home/logo-p6.png', className: "w-40 md:w-44", url: "https://donya-e-eqtesad.com/"},
    {name: "سایت خبری اقتصادنیوز", src: '/home/logo-p7.png', className: "w-20 md:w-24", url: "https://www.eghtesadnews.com/"},
    {name: "معاونت علمی و فناوری ریاست جمهوری", src: '/home/logo-p15.png', className: "w-20 md:w-24", url: "https://isti.ir/"},
    {name: "خانه های خلاق و نوآوری", src: '/home/logo-p16.png', className: "w-36 md:w-48", url: "https://www.creativehousenet.ir/web/"},
    {name: "ستاد فناوری های نرم و توسعه صنایع خلاق معاونت علمی و فناوری ریاست جمهوری ", src: '/home/logo-p21.png', className: "w-20 md:w-24", url: "#"},
    {name: "ستاد توسعه فناوری های فرهنگی و نرم", src: '/home/logo-p17.png', className: "w-20 md:w-24", url: "https://stdc.isti.ir/"},
]
export default function Home() {
    return (
        <>
            <div className = {styles.gradientBg}>
                <Head>
                    <title>خانه</title>
                    <meta name = "description" content = "مرکز فناوری دنیای اقتصاد"/>
                    <link rel = "icon" href = "/common/logo.png"/>
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
                    <Partners items={items}/>
                    <FAQ/>
                </main>
                <Footer/>

            </div>

        </>
    )
}
