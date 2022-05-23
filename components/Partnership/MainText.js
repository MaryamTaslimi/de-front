
const items = [
    {title: "پر کردن فرم مشاوره", src: "/partnership/icon1.png"},
    {title: "تعیین جلسه معارفه", src: "/partnership/icon2.png"},
    {title: "بررسی شرایط شرکت و انواع روش های همکاری", src: "/partnership/icon3.png"},
    {title: "امضای تفاهم نامه", src: "/partnership/icon4.png"},
]


export default function MainText() {
    return (
        <div className = {"hidden lg:flex flex-row min-h-[110vh]"}>
            <div className = {"flex flex-col justify-between items-stretch w-1/2 pl-8 border-l-2 border-shades-60"}>
                <div className = {"flex flex-col gap-8 min-h-[90vh]"}>
                    <p className = {"text-right font-light text-shades-10 text-2xl border-b-2 border-shades-60 pb-6"}>شراکت
                        استراتژیک</p>
                    <p className = {"text-justify font-light text-shades-10 text-sm md:text-lg"}>مشارکت در مرکز نوآوری دنیای اقتصاد
                        عبارت است از ایجاد ارتباط میان کسب‌وکار، استارتاپ یا ایده‌پرداز با سایر شرکت‌های شتاب‌دهنده،
                        مراکز تحقیق و توسعه، سرمایه‌گذاری‌های خطرپذیر، صندوق‌های سرمایه‌گذاری و کسب‌وکارها به جهت جذب
                        سرمایه‌گذار از طریق همکاری مشترک و استفاده از بسترهای گروه رسانه‌ای دنیای اقتصاد با هدف معرفی
                        محصول و توسعه بازار کسب‌وکار مورد نظر می‌باشد.
                    </p>
                </div>

                <div className = {"flex flex-col"}>
                    <div
                        className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                        <img src = {"/partnership/icon0.png"} className = {" w-16"}/>
                        <p className = {"text-center font-light text-shades-10 text-2xl md:text-4xl"}>مسیر همکاری</p>
                    </div>
                    <div className = {"flex flex-col gap-10"}>
                        {
                            items.map(item => (
                                <div key = {item.title} className = {"flex flex-row items-center gap-4"}>
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
                    <p className = {"text-justify font-light text-shades-10 text-sm md:text-lg"}>مشارکت در مرکز نوآوری دنیای اقتصاد
                        عبارت است از ایجاد ارتباط میان کسب‌وکار، استارتاپ یا ایده‌پرداز با سایر شرکت‌های شتاب‌دهنده،
                        مراکز تحقیق و توسعه، سرمایه‌گذاری‌های خطرپذیر، صندوق‌های سرمایه‌گذاری و کسب‌وکارها به جهت جذب
                        سرمایه‌گذار از طریق همکاری مشترک و استفاده از بسترهای گروه رسانه‌ای دنیای اقتصاد با هدف معرفی
                        محصول و توسعه بازار کسب‌وکار مورد نظر می‌باشد.
                    </p>
                </div>

                <div className = {"flex flex-col gap-8"}>
                    <p className = {"text-center font-light text-shades-10 text-2xl md:text-4xl border-b-2 border-shades-60 pb-6"}>

                        چرا خانه خلاق و نوآوری دنیای اقتصاد؟
                    </p>
                    <p className = {"text-justify font-light text-shades-10 text-2xl"}>
                        دنیای اقتصاد نیز در راستای خدمت به مشتریان خود و پاسخ به این نیاز ضروری مرکز نوآوری و کسب‌وکار
                        دیجیتال دنیای اقتصاد را تأسیس کرد. بدین ترتیب مرکز نوآوری دنیای اقتصاد به‌عنوان<span className={"text-accent"}> تحلیل‌گر مورد اعتماد کسب‌وکارها</span> و
                        با شناخت بازارهای سنتی و مدرن و <span className={"text-accent"}>تکیه بر داده‌های اقتصادی</span> خود قصد دارد بتواند
                        به‌عنوان بازیگر مرزی نظام
                        اقتصادی،<span className={"text-accent"}> سرمایه کسب‌وکارهای سنتی را با صنعت فناوری پیوند بزند</span>.
                    </p>
                </div>


            </div>

        </div>
    )
}