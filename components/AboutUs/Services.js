import Chevron from "../Common/Chevron";
import ChevronForm from "../Common/ChevronForm";

export default function Services() {
    return (
        <div className = {"flex flex-col"}>
            <div className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                <img src = {"/about/services.png"} className = {" w-16"}/>
                <p className = {"text-right font-light text-shades-10 text-2xl md:text-4xl"}>خدمات نوآوری و کسب‌وکار</p>
            </div>
            <div className = {"flex flex-col lg:flex-row gap-12"}>
                <div className = {"flex flex-col gap-8  lg:w-1/2"}>
                    <div className = {"flex flex-col"}>
                        <div className = {"flex flex-row items-center gap-4 mt-6"}>
                            <img src = {"/about/service1.png"} alt = {"icon"} className = {"w-12"}/>
                            <p className = {"font-light text-lg md:text-2xl text-secondary"}>تسهیل فرایند سرمایه‌گذاری و
                                سرمایه‌پذیری</p>
                        </div>
                        <p className = {"font-light text-sm md:text-lg text-shades-10 text-justify mt-8"}>
                            ایجاد<span className = {"text-secondary"}> ارتباط میان سرمایه‌گذاران جسور و ایده‌پردازان کسب‌وکارهای نوپا </span>در
                            جهت
                            پیشرفت اقتصاد فناوری. در این فرایند اطلاعات کامل کسب‌وکارها مورد تجزیه‌وتحلیل قرار گرفته و
                            گزارش‌های دقیق به سرمایه‌گذاران ارائه می‌شود تا ریسک خطرپذیری آنها به حداقل رسیده و
                            <span className = {"text-secondary"}>انتخاب شفافی</span> در نوع سرمایه‌گذاری خود داشته
                            باشند.
                        </p>
                    </div>
                    <div className = {"flex flex-col"}>
                        <div className = {"flex flex-row items-center gap-4 mt-6"}>
                            <img src = {"/about/service3.png"} alt = {"icon"} className = {"w-12"}/>
                            <p className = {"font-light text-lg md:text-2xl text-secondary"}>مشاوره سرمایه‌گذاری و کسب‌وکار</p>
                        </div>
                        <p className = {"font-light text-sm md:text-lg text-shades-10 text-justify mt-8"}>
                            ارائه مشاوره و پیشنهادهای اقتصادی و سرمایه‌گذاری با<span className = {"text-secondary"}> تکیه بر دانش اقتصادی</span> خود
                            در
                            جهت گردش مالی و سودآوری سرمایه راکد مجموعه‌های مختلف.
                        </p>
                    </div>
                    <div className = {"flex flex-col"}>
                        <div className = {"flex flex-row items-center gap-4 mt-6"}>
                            <img src = {"/about/service5.png"} alt = {"icon"} className = {"w-12"}/>
                            <p className = {"font-light text-lg md:text-2xl text-secondary"}> شراکت استراتژیک </p>
                        </div>
                        <p className = {"font-light text-sm md:text-lg text-shades-10 text-justify mt-8"}>
                            مرکز نوآوری دنیای اقتصاد با بهره‌گیری از ظرفیت باشگاه مشتریان دنیای اقتصاد و زیرمجموعه‌های
                            آن به کسب‌وکارها در زمینه<span
                            className = {"text-secondary"}> توسعه بازار، توسعه محصول </span> و غیره در جهت<span
                            className = {"text-secondary"}>  افزایش فروش و برندینگ </span> کمک
                            می‌کند.
                        </p>
                    </div>
                </div>
                <div className = {"flex grow flex-col gap-8 justify-between lg:w-1/2"}>
                    <div className = {"flex flex-col"}>
                        <div className = {"flex flex-row items-center gap-4 mt-6"}>
                            <img src = {"/about/service2.png"} alt = {"icon"} className = {"w-12"}/>
                            <p className = {"font-light text-lg md:text-2xl text-secondary"}>خدمات به استارتاپ‌ها</p>
                        </div>
                        <p className = {"font-light text-sm md:text-lg text-shades-10 text-justify mt-8"}>
                            در این قسمت<span className = {"text-secondary"}> خدمات مختلف مالی، منابع انسانی، حقوقی، مارکتینگ، محتوا و غیره</span> به
                            استارتاپ‌های نوپا و قدیمی ارائه می‌شود.
                            <br/>
                            این خدمات به طور دقیق شامل راستی‌آزمایی و ارزش‌گذاری استارتاپ، مشاوره و اجرای موارد حقوقی و
                            رفع موانع قراردادها، رایزنی برای تهیه فضای کار، تهیه زیرساخت‌های لازم برای پیشبرد پروژه‌ها،
                            ارائه خدمات مدیریت پروژه منابع انسانی، ارزیابی و رفع موانع مالی و حسابداری، مارکتینگ، تولید
                            محتوا و تبلیغات است که بسته به نیاز و درخواست استارتاپ‌ها به آن‌ها ارائه می‌گردد.
                            باشند.
                        </p>
                    </div>
                    <div className = {"flex flex-col"}>
                        <div className = {"flex flex-row items-center gap-4 mt-6"}>
                            <img src = {"/about/service4.png"} alt = {"icon"} className = {"w-12"}/>
                            <p className = {"font-light text-lg md:text-2xl text-secondary"}>رویداد آموزش</p>
                        </div>
                        <p className = {"font-light text-sm md:text-lg text-shades-10 text-justify mt-8"}>
                            با توجه به تحول کسب‌وکارها، پیشرفت علم و افزایش رقابت میان استارتاپ‌ها و دانش‌بنیان‌های
                            مختلف؛ دانش به‌روز یکی از نیازهای مهم و اصلی مجموعه‌ها محسوب می‌شود. به همین منظور مرکز
                            نوآوری دنیای اقتصاد با <span className = {"text-secondary"}>همکاری مرکز توسعه دانش دنیای اقتصاد و نیز دانشگاه‌های معتبر و اساتید مجرب</span> در
                            نظر دارد تا همایش و کارگاه‌های آموزشی را با موضوعات آموزش مدیریت و اقتصاد، مدیریت منابع
                            انسانی، تحول دیجیتال و روند جهانی کسب‌وکارها، مالی، بورس، سرمایه‌گذاری و بانکی، مدیریت
                            بازاریابی، فروش، تبلیغات و مشتری‌مداری برای سازمان‌ها، ایده‌پردازان، صاحبان کسب‌وکارها،
                            کارکنان و کارجویان برگزار نماید.
                        </p>
                    </div>
                </div>
            </div>
            <div  className={"hidden md:block"}>
                <ChevronForm/>
            </div>

        </div>

    )
}