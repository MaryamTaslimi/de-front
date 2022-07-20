import Link from "next/link";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import FAQ from "./FAQ";

export default function StartupBanner() {
    return (
        <div className={" bg-[#E3E3E3] py-12 px-6 sm:px-20 mt-24 "}>
            <div className = {"flex flex-col xl:flex-row items-center xl:items-stretch justify-between font-light gap-12 "}>
                <img src = {"/startup/startupBanner.png"} className = {"md:w-1/2 h-auto rounded-sm"}/>
                <div className = {"flex flex-col justify-between grow gap-12 "}>
                    <p className = {"text-[#E6491E] text-2xl lg:text-4xl text-center"}>خانه خلاق و نوآوری دنیای اقتصاد
                        برگزار
                        می‌کند؛<br/>
                        فراخوان جذب ایده و استارت‌آپ در حوزه معدن</p>
                    <p className = {"text-justify text-base lg:text-2xl text-shades-100"}>
                        در حاشیه همایش معدن‌کاری دیجیتال 1401، خانه خلاق و نوآوری دنیای اقتصاد با همکاری مجموعه 100
                        <br/><br/>استارت‌آپ، برای ایده‌ها و استارتاپ‌های حوزه معدن جذب سرمایه می‌کند.
                        به گزارش روابط‌عمومی خانه خلاق و نوآوری دنیای اقتصاد، موضوع این ایده‌ها و استارتاپ‌ها می‌بایست در
                        زمینه‌ صنعت باشد؛ همچون:
                        <br/>
                        <br/>هوش مصنوعی
                        <br/>اندازه‌گیری و تست
                        <br/> یکپارچه‌سازی فرایندها
                        <br/> زیرساخت‌های معدن‌کاری دیجیتال
                        <br/> تحول دیجیتال در نظارت بر ایمنی معدن
                        <br/> اینترنت اشیا در فرایندهای نمونه‌برداری
                        <br/> تحول دیجیتال در تعمیر و نگهداری تجهیزات و ماشین‌آلات
                        <br/><br/>
                        شما می توانید جهت کسب اطلاعات بیشتر به آدرس اینترنتی www.deic.vc و یا www.100startups.ir مراجعه کنید
                        یا با شماره 02187762743 تماس حاصل فرمایید.
                        <br/><br/>
                        همچنین مدارک خود از طریق پنل فرم سرمایه‌پذیر در سایت خانه خلاق و نوآوری دنیای اقتصاد ارسال کنید.
                        <br/><br/>
                        گفتنی است آخرین مهلت ارسال ایده 7 مرداد 1401 است و حداکثر تا تاریخ 11 شهریورماه مراتب تأیید یا رد
                        ایده‌ها اعلام و همراه با سند ارزیابی به اشخاص ارسال می‌شود.

                    </p>
                    <a
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
                    </a>
                </div>
            </div>
            <FAQ/>
        </div>

    )
}