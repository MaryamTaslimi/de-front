const items = [
    {title: "بازار مشخص", src: "/startup/icon1.png"},
    {title: "برنامه مالی مشخص", src: "/startup/icon2.png"},
    {title: "تیم تکمیل", src: "/startup/icon3.png"},
    {title: "محصول تکمیل قابل‌ارائه MVP", src: "/startup/icon4.png"},
]



export default function MainTextMobile() {
    return (
            <div className = {"lg:hidden flex flex-col justify-between items-stretch gap-10"}>

                <div className = {"flex flex-col gap-4"}>
                    <p className = {"text-right font-light text-shades-10 text-lg md:text-2xl border-b-2 border-shades-60 pb-2"}>
                        چالش‌های جذب سرمایه
                    </p>
                    <p className = {"text-justify font-light text-shades-10 text-sm md:text-lg"}>
                        جابون نام یک استارتاپ با محوریت فناوری‌های پوشیدنی بود که لوازم جانبی مختلفی از جمله هندزفری
                        بلوتوثی، دستبند هوشمند و غیره را عرضه می‌کرد. این شرکت با وجود ایده‌های خلاقانه، تیم قوی و جذب
                        سرمایه‌ی کلان، در سال 1396 شکست خورد و به طلبکارانش واگذار شد. تحلیلگران حوزه فناوری یکی از
                        بزرگ‌ترین دلایل شکست این استارتاپ را جذب سرمایه‌ی هنگفت بدون داشتن برنامه مشخص و سوءمدیریت
                        می‌دانند.
                        بنابراین الزاماً جذب سرمایه کلان تضمین‌کننده موفقیت ایده یا استارتاپ شما نخواهد بود. چراکه تزریق
                        پول در هر استارتاپی نیازمند <span className = {"text-accent"}>ارزیابی نیاز بازار، برنامه‌ریزی و مدیریت پروژه</span> است.
                    </p>
                </div>

                <div className = {"flex flex-col gap-4"}>
                    <p className = {"text-center font-light text-shades-10 text-lg border-b-2 border-shades-60 pb-2"}>

                        چرا خانه خلاق و نوآوری دنیای اقتصاد؟
                    </p>
                    <p className = {"text-justify font-light text-shades-10 text-sm"}>

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
                        <p className = {"text-center font-light text-shades-10 text-2xl"}>شرایط پذیرش استارتاپ</p>
                    </div>
                    <div className = {"flex flex-col gap-4"}>
                        {
                            items.map(item => (
                                <div key = {item.title} className = {"flex flex-row items-center gap-4"}>
                                    <img src = {item.src} alt = {"icon"} className = {"w-12"}/>
                                    <p className = {"font-light text-lg text-shades-10"}>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>



            </div>

    )
}