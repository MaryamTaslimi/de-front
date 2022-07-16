import Link from "next/link";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

export default function StartupBanner() {
    return (
        <div
            className = {"flex flex-col xl:flex-row items-center xl:items-stretch justify-between mt-24 font-light bg-[#DCD7D5] gap-12 py-12 px-6 sm:px-20"}>
            <img src = {"/startup/startupBanner.png"} className = {"md:max-w-xl h-auto rounded-sm"}/>
            <div className = {"flex flex-col justify-between grow gap-12"}>
                <p className = {"text-[#E6491E] text-2xl lg:text-4xl text-center"}>خانه خلاق و نوآوری دنیای اقتصاد
                    برگزار
                    می‌کند؛<br/>
                    فراخوان جذب ایده و استارت‌آپ در حوزه معدن</p>
                <p className = {"text-justify text-base lg:text-2xl text-shades-100"}>
                    در حاشیه همایش معدن‌کاری دیجیتال 1401، خانه خلاق و نوآوری دنیای اقتصاد برای ایده‌ها و استارتاپ‌های
                    حوزه معدن جذب سرمایه می‌کند.
                    <br/>
                    <br/>
                    به گزارش روابط‌عمومی خانه خلاق و نوآوری دنیای اقتصاد، موضوع این ایده‌ها و استارتاپ‌ها بایستی در
                    زمینه‌هایی همچون زیرساخت‌های معدن‌کاری دیجیتال، هوش مصنوعی، یکپارچه‌سازی فرایندها، اینترنت اشیا در
                    فرایندهای نمونه‌برداری، اندازه‌گیری و تست، تحول دیجیتال در نظارت بر ایمنی معدن و تحول دیجیتال در
                    تعمیر و نگهداری تجهیزات و ماشین‌آلات باشد.
                    <br/>
                    <br/>
                    سرمایه‌پذیران علاقه‌مند به مشارکت می‌بایست مدارک خود را از طریق فرم سرمایه‌پذیر در سایت خانه خلاق و
                    نوآوری دنیای اقتصاد به آدرس www.deic.vc ارسال کنند.
                    <br/>
                    <br/>
                    همچنین آخرین مهلت ارسال ایده 7 مرداد 1401 است و حداکثر تا تاریخ 11 شهریورماه مراتب تأیید یا رد
                    ایده‌ها اعلام و همراه با سند ارزیابی و دلایل خدمت اشخاص ارسال می‌شود.
                    گفتنی است شما می‌توانید جهت کسب اطلاعات بیشتر در خصوص سؤالات احتمالی با شماره 02187762743 تماس حاصل
                    فرمایید.
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
    )
}