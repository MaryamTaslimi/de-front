import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";

const items = [
    "برترین رسانه اکوسیستم نوآوری و فناوری",
    "معروف‌ترین مرکز سرمایه‌گذاری خطرپذیر ایران",
    "مؤثرترین مرکز در افزایش حجم اقتصاد دیجیتال"
]
export default function Vision() {
    return (
        <div className = {"flex flex-col"}>
            <div
                className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                <img src = {"/about/vision.png"} className = {"brightness-0 invert w-16"}/>
                <p className = {"text-justify font-light text-shades-10 text-4xl"}>چشم انداز</p>
            </div>
            <p className = {"text-justify font-light text-shades-60 text-lg"}>تبدیل شدن به:</p>
            <div className = {"flex flex-row items-center justify-between mx-6"}>
                {
                    items.map(item => (
                        <div key = {item} className = {"flex flex-row items-center gap-4 mt-6"}>
                            <HexagonRoundedIcon className = {"text-primary rotate-90"} sx = {{fontSize: "xx-large"}}/>
                            <p className = {"font-light text-xl text-shades-10"}>
                                {item}
                            </p>
                        </div>

                    ))
                }
            </div>
        </div>

    )
}