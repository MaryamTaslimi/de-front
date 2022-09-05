import {apiRoutes} from "../../utils/const"

export default function AboutHero() {
    return (

        <div className = {"flex flex-row justify-center items-center gap-20 mt-12 sm:mt-24"}>
            <div className = {"hidden lg:flex flex-col basis-full gap-8 items-center"}>
                <img src = {"/common/logo-type.png"} alt = {"logo"} className = " w-56 h-auto"/>
                <a href = {apiRoutes.baseURL + apiRoutes.downloadCatalog} download target = {"_blank"}
                   rel = "noreferrer"
                   className = {"flex flex-row items-center"}>
                    <p className = {"text-accent font-light text-2xl"}>دانلود کاتالوگ خانه خلاق و نوآوری دنیای
                        اقتصاد</p>
                    <img src = {"/about/catalog-download.png"} href={"/about/eghtesad.pdf"} className = {"w-16 mr-4"}/>
                </a>

            </div>

            <div className = {"flex flex-col"}>
                <div
                    className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 md:mb-8 "}>
                    <img src = {"/about/lamp.png"} className = {"brightness-0 invert w-16 mr-4"}/>
                    <p className = {"text-justify font-light text-shades-10 text-2xl md:text-4xl"}>درباره ما</p>

                </div>
                <a href = {apiRoutes.baseURL + apiRoutes.downloadCatalog} download target = {"_blank"}
                   rel = "noreferrer"
                   className = {"flex flex-row items-center justify-center my-6 lg:hidden"}
                >
                    <p className = {"text-accent font-light text-lg "}>دانلود کاتالوگ</p>
                    <img src = {"/about/catalog-download.png"} className = {"w-16 mr-4"}/>
                </a>
                <p className = {"text-justify font-light text-shades-20 text-sm md:text-lg"}>
                    خانه خلاق و نوآوری دنیای اقتصاد از سال ۱۴۰۰ فعالیت خود را در<span
                    className = {"text-accent"}> حوزه سرمایه‌گذاری خطرپذیر (Venture capital)  </span> آغاز
                    کرده است. این مرکز یکی از زیرمجموعه‌های <span className = {"text-secondary-50"}>گروه رسانه‌ای دنیای اقتصاد</span> به
                    شمار می‌رود.
                    دنیای اقتصاد از سال ۱۳۸۱ طور مستمر در حوزه اقتصاد فعالیت‌های رسانه‌ای مختلفی داشته و از یک
                    روزنامه
                    چاپی به مرجع داده‌های اقتصادی ایران تبدیل شده است.
                    <br/>
                    <br/>
                    با پیشرفت فناوری و آنلاین محور شدن خدمات، مجموعه دنیای اقتصاد نیز در نظر گرفت تا با تکیه بر دانش
                    و
                    تجربه رسانه‌ای و اقتصادی خود و همچنین بهره‌گیری از اعتبار خود در حوزه‌های خصوصی یا دولتی، خدمات
                    و
                    کارآمدی را برای مشتریان خود افزایش دهد و بدین منظور خانه خلاق و نوآوری دنیای اقتصاد
                    را
                    راه‌اندازی کرد.
                    <br/>
                    اکنون خانه خلاق و نوآوری دنیای اقتصاد با
                    شعار <span className = {"text-accent"}>«آینده از اینجا شروع می‌شود»</span> قصد دارد تعاملی
                    سازنده
                    میان اشخاص حقیقی و شرکت‌های
                    مستعد سرمایه‌گذاری و دانش‌بنیان‌ها ایجاد کند و پلی میان نظام اقتصادی سنتی و مدرن باشد.
                    این مرکز بر این باور است که می‌تواند با تکیه بر <span className = {"text-accent"}> شبکه ارتباطی گسترده‌ای که در طول سال‌ها فعالیت تخصصی خود در حوزه اقتصاد کسب کرده است</span>،
                    موجبات رشد اقتصادی و پیشرفت در صنعت فناوری را فراهم آورد.


                </p>
            </div>
        </div>
    )
}