import ChevronForm from "../Common/ChevronForm";


const items = [
    {title: "بازار مشخص", src: "/startup/icon1.png"},
    {title: "برنامه مالی مشخص", src: "/startup/icon2.png"},
    {title: "تیم تکمیل", src: "/startup/icon3.png"},
    {title: "محصول تکمیل قابل‌ارائه MVP", src: "/startup/icon4.png"},

]
export default function MainText() {
    return (
        <div className = {"flex flex-row min-h-[110vh]"}>
            <div className = {"flex flex-col justify-between items-stretch w-1/2 pl-8 border-l-2 border-shades-60"}>
                <div className = {"flex flex-col gap-8"}>
                    <p className = {"text-right font-light text-shades-10 text-2xl border-b-2 border-shades-60 pb-6"}>سرمایه‌پذیر</p>
                    <p className = {"text-justify font-light text-shades-10 text-lg"}>جابون نام یک استارتاپ با محوریت
                        فناوری‌های پوشیدنی بود که لوازم جانبی مختلفی از جمله هندزفری بلوتوثی، دستبند هوشمند و غیره را
                        عرضه می‌کرد. این شرکت با وجود ایده‌های خلاقانه، تیم قوی و جذب سرمایه‌ی کلان، در سال 1396 شکست
                        خورد و به طلبکارانش واگذار شد. تحلیلگران حوزه فناوری یکی از بزرگ‌ترین دلایل شکست این استارتاپ را
                        جذب سرمایه‌ی هنگفت بدون داشتن برنامه مشخص و سوءمدیریت می‌دانند.
                        بنابراین الزاماً جذب سرمایه کلان تضمین‌کننده موفقیت ایده یا استارتاپ شما نخواهد بود. چراکه تزریق
                        پول در هر استارتاپی نیازمند ارزیابی نیاز بازار، برنامه‌ریزی و مدیریت پروژه است.
                    </p>
                </div>

                <div className = {"flex flex-col"}>
                    <div
                        className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                        <img src = {"/startup/icon0.png"} className = {" w-16"}/>
                        <p className = {"text-center font-light text-shades-10 text-4xl"}>شرایط پذیرش استارتاپ</p>
                    </div>
                    <div className = {"flex flex-col gap-4"}>
                        {
                            items.map(item => (
                                <div key = {item.title} className = {"flex flex-row items-center gap-4 mt-6"}>
                                    <img src = {item.src} alt = {"icon"} className = {"w-12"}/>
                                    <p className = {"font-light text-2xl text-shades-10"}>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
            <div className = {"flex flex-col w-1/2 pr-8"}>
                <div className = {"invisible flex flex-col gap-8"}>
                    <p className = {"text-right font-light text-shades-10 text-2xl border-b-2 border-shades-60 pb-6"}>شراکت
                        استراتژیک</p>
                    <p className = {"text-justify font-light text-shades-10 text-lg"}>مشارکت در مرکز نوآوری دنیای اقتصاد
                        عبارت است از ایجاد ارتباط میان کسب‌وکار، استارتاپ یا ایده‌پرداز با سایر شرکت‌های شتاب‌دهنده،
                        مراکز تحقیق و توسعه، سرمایه‌گذاری‌های خطرپذیر، صندوق‌های سرمایه‌گذاری و کسب‌وکارها به جهت جذب
                        سرمایه‌گذار از طریق همکاری مشترک و استفاده از بسترهای گروه رسانه‌ای دنیای اقتصاد با هدف معرفی
                        محصول و توسعه بازار کسب‌وکار مورد نظر می‌باشد.
                    </p>
                </div>

                <div className = {"flex flex-col gap-8"}>
                    <p className = {"text-center font-light text-shades-10 text-4xl border-b-2 border-shades-60 pb-6"}>چرا
                        مرکز نوآوری دنیای اقتصاد؟</p>
                    <p className = {"text-justify font-light text-shades-10 text-2xl"}>
                        دنیای اقتصاد نیز در راستای خدمت به مشتریان خود و پاسخ به این نیاز ضروری مرکز نوآوری و کسب‌وکار
                        دیجیتال دنیای اقتصاد را تأسیس کرد. بدین ترتیب مرکز نوآوری دنیای اقتصاد به‌عنوان تحلیل‌گر مورد
                        اعتماد کسب‌وکارها و با شناخت بازارهای سنتی و مدرن و تکیه بر داده‌های اقتصادی خود قصد دارد بتواند
                        به‌عنوان بازیگر مرزی نظام اقتصادی، سرمایه کسب‌وکارهای سنتی را با صنعت فناوری پیوند بزند.
                    </p>
                </div>
            </div>

        </div>
    )
}