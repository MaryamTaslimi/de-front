export default function AboutHero() {
    return (

        <div className = {"flex flex-row justify-center items-center row-span-3 gap-20 mt-12 sm:mt-24"}>
            <img src = {"/logo-text.png"} alt = {"logo"} className = "hidden sm:block max-h-40 w-auto"/>
            <div className = {"flex flex-col"}>
                <div
                    className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                    <img src = {"/About/lamp.png"} className = {"brightness-0 invert w-16"}/>
                    <p className = {"text-justify font-light text-shades-10 text-4xl"}>درباره ما</p>
                </div>
                <p className = {"text-justify font-light text-shades-20 text-lg"}>
                    مرکز نوآوری و کسب‌وکار دیجیتال دنیای اقتصاد از سال ۱۴۰۰ فعالیت خود را در<span
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
                    کارآمدی را برای مشتریان خود افزایش دهد و بدین منظور مرکز نوآوری و کسب‌وکار دیجیتال دنیای اقتصاد
                    را
                    راه‌اندازی کرد.
                    <br/>
                    اکنون مرکز نوآوری و کسب‌وکار دیجیتال دنیای اقتصاد با
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