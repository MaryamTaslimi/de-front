import Link from "next/link";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import FAQ from "./FAQ";

export default function StartupBanner() {
    return (
        <div className={" bg-[#E3E3E3] py-12 px-6 sm:px-20 mt-24 "}>
            <div className = {"flex flex-col xl:flex-row items-center xl:items-stretch justify-between font-light gap-12 "}>
                <img src = {"/startup/startupBanner.png"} className = {"md:w-1/2 h-auto rounded-sm"}/>
                <div className = {"flex flex-col justify-between grow gap-12 "}>
                    <p className = {"text-[#E6491E] text-2xl lg:text-4xl text-center"}>اعلام اسامی ۱۰ سرمایه‌پذیر برگزیده رویداد معدنکاری دیجیتال<br/></p>
                    <p className = {"text-justify text-base lg:text-2xl text-shades-100"}>
                    اسامی ۱۰ طرح برگزیده شرکت کننده در همایش معدنکاری دیجیتال، ۱۵ شهریور اعلام می‌شود.
                        <br/><br/>به گزارش روزنامه دنیای اقتصاد، غلامحسین محمدی، رئیس خانه خلاق و نوآوری دنیای اقتصاد اعلام کرد: در پی انتشار فراخوان جذب ایده و استارت‌آپ در حوزه معدنکاری دیجیتال، بیش از ۱۰۰ طرح برای دبیرخانه همایش ارسال شد.  
                        <br/><br/>وی افزود: پس از ارزیابی طرح‌ها، ۳۰ شرکت استارت‌آپی و دانش‌بنیان به مرحله ارزیابی و برای شرکت در جلسه داوری به دور انتخابی راه یافتند. 
                        <br/><br/>محمدی تشریح کرد: داوری این گروه‌ها ۱۵ شهریورماه در رویداد اکووست (پیش رویداد نوآوری و فناوری همایش معدنکاری دیجیتال 2022) انجام خواهد شد که در این مراسم  ۳۰ کسب و کار نوآور و دانش‌بنیان در معدنکاری دیجیتال معرفی می‌شود. 
                        <br/><br/>وی افزود: تیم‌هایی که به این دوره راه یافته‌اند از بسته حمایتی شرکت‌های دانش‌بنیان توسط همکاران همایش بهره‌مند می‌شوند که شامل فضای کار اشتراکی، تسهیلات، آزمایشگاه و غیره می‌شود.
                        <br/><br/>رئیس خانه خلاق و نوآوری دنیای اقتصاد در پایان گفت: در انتهای این برنامه پس از داوری و ارزیابی طرح‌ها، اسامی ۱۰ طرح برگزیده جهت شرکت در همایش معدنکاری دیجیتال ۲۰۲۲ در تاریخ ۲۲ شهریور اعلام خواهد شد. در فرایند ارزیابی و حمایت از این شرکت‌ها، علاوه بر خانه خلاق و نوآوری دنیای اقتصاد مجموعه‌های ۱۰۰ استارتاپ، سلیم، یونیدرو و ایمیدرو همکاری نموده‌اند. 
                        <br/>گفتنی است هوش مصنوعی، اندازه‌گیری و تست، یکپارچه‌سازی فرایندها، زیرساخت‌های معدن‌کاری دیجیتال، تحول دیجیتال در نظارت بر ایمنی معدن، اینترنت اشیا در فرایندهای نمونه‌برداری و تحول دیجیتال در تعمیر و نگهداری تجهیزات و ماشین‌آلات محور اصلی این ایده‌ها بوده است.
                    </p>
                    {/* <a
                        href = "#form"
                        className = "hidden lg:flex flex-row items-center justify-center gap-2 bg-[#E6491E] w-full h-14 border border-transparent rounded-sm text-2xl font-light text-shades-10">
                        <p className = {"text-base lg:text-2xl"}>تکمیل فرم</p>
                        <KeyboardArrowLeftRoundedIcon/>
                    </a>
                    <a
                        href = "#formMobile"
                        className = "lg:hidden flex flex-row items-center justify-center gap-2 bg-[#E6491E] w-full h-14 border border-transparent rounded-sm text-2xl font-light text-shades-10">
                        <p className = {"text-base lg:text-2xl"}>تکمیل فرم</p>
                        <KeyboardArrowLeftRoundedIcon/>
                    </a> */}
                </div>
            </div>
        </div>

    )
}