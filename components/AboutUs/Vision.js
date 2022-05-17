import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";

const items = [
    "سرمایه‌گذاران حقیقی و حقوقی، شتاب‌دهنده‌ها و سرمایه‌گذاران خطرپذیر",
    "شرکت‌های دانش‌بنیان، ایده‌پردازان و گروه‌های استارتاپی",
    "صاحبان کسب‌وکارها"
]
export default function Vision() {
    return (
        <div className = {"flex flex-col"}>
            <div
                className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                <img src = {"/About/vision.png"} className = {"brightness-0 invert w-16"}/>
                <p className = {"text-justify font-light text-shades-10 text-4xl"}>چشم انداز</p>
            </div>
            <div className = {"flex flex-row items-center justify-between"}>
                {
                    items.map(item => (
                        <div key={item} className = {"flex flex-row items-center gap-4 mr-1.5"}>
                            <HexagonRoundedIcon className = {"text-primary rotate-90"} sx = {{fontSize: "large"}}/>
                            <div className = {"font-light text-lg text-shades-40"}>
                                {item}
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>

    )
}