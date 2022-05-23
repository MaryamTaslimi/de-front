const items = [
    {title: "پر کردن فرم مشاوره", src: "/partnership/icon1.png"},
    {title: "تعیین جلسه معارفه", src: "/partnership/icon2.png"},
    {title: "بررسی شرایط شرکت و انواع روش های همکاری", src: "/partnership/icon3.png"},
    {title: "امضای تفاهم نامه", src: "/partnership/icon4.png"},

]


export default function MainTextMobile() {
    return (
            <div className = {"lg:hidden flex flex-col justify-between items-stretch gap-10"}>

                <div className = {"flex flex-col gap-4"}>
                    <p className = {"text-right font-light text-shades-10 text-lg border-b-2 border-shades-60 pb-2"}>شراکت
                        استراتژیک
                    </p>
                    <p className = {"text-justify font-light text-shades-10 text-sm"}>
                        مشارکت در مرکز نوآوری دنیای اقتصاد
                        عبارت است از ایجاد ارتباط میان کسب‌وکار، استارتاپ یا ایده‌پرداز با سایر شرکت‌های شتاب‌دهنده،
                        مراکز تحقیق و توسعه، سرمایه‌گذاری‌های خطرپذیر، صندوق‌های سرمایه‌گذاری و کسب‌وکارها به جهت جذب
                        سرمایه‌گذار از طریق همکاری مشترک و استفاده از بسترهای گروه رسانه‌ای دنیای اقتصاد با هدف معرفی
                        محصول و توسعه بازار کسب‌وکار مورد نظر می‌باشد.
                    </p>
                </div>

                <div className = {"flex flex-col gap-4"}>
                    <p className = {"text-center font-light text-shades-10 text-2xl border-b-2 border-shades-60 pb-2"}>چرا
                        مرکز نوآوری دنیای اقتصاد؟</p>
                    <p className = {"text-justify font-light text-shades-10 text-base"}>

                        خانه خلاق و نوآوری دنیای اقتصاد با بررسی بازار کنونی شما، کمک به ایجاد برنامه‌ریزی
                        های کوتاه مدت, میان مدت و بلند مدت و تعیین و کمک به مدیریت پروژه، قصد دارد <span
                        className = {"text-accent"}>از دانش اقتصادی خود برای حداکثر سازی رشد و توسعه کسب و کار ها استفاده کند. </span> همچنین
                        باتوجه به اعتبار و بسترهای موجود در گروه رسانه‌ای دنیای اقتصاد در جهت <span
                        className = {"text-accent"}>معرفی برند، محصولات و خدمات</span> شما
                        به بازار، توسعه بازار شما را ضمانت ببخشد. </p>
                </div>

                <div className = {"flex flex-col"}>
                    <div
                        className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                        <img src = {"/partnership/icon0.png"} className = {" w-16"}/>
                        <p className = {"text-center font-light text-shades-10 text-2xl md:text-4xl"}>مسیر همکاری</p>
                    </div>
                    <div className = {"flex flex-col gap-4"}>
                        {
                            items.map(item => (
                                <div key = {item.title} className = {"flex flex-row items-center gap-4"}>
                                    <img src = {item.src} alt = {"icon"} className = {"w-12"}/>
                                    <p className = {"font-light text-lg md:text-2xl text-shades-10"}>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>

    )
}