import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function Call() {
    return (
        <div className = {"bg-accent rounded-sm p-8 flex flex-col"}>
            <div
                className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 mb-8 pb-8"}>
                <img src = {"/investor/guarantee.png"} className = {" w-16 md:mr-4"}/>
                <p className = {"text-justify font-light text-shades-100 text-lg md:text-2xl"}>تیم مشاوره تخصصی سرمایه‌گذاران</p>
            </div>
            <p className = {"text-justify font-light text-shades-100 text-sm md:text-lg mb-8"}>سرمایه‌گذاران به دلیل نقش مهم و به سزایی
                که در ایجاد حرکت و پیشرفت صنعت و اقتصاد کشور دارند، از توجه ویژه و دانش تخصصی تیم حرفه‌ای ما متنفع
                هستند. برای دریافت مشاوره در زمینه سرمایه گذاری با تماس بگیرید.</p>
            <a href = "https://wa.me/093861575703" className = {"self-end"}>
                <div className = {"flex flex-row items-center gap-6"}>
                    <p className = {"text-sm md:text-lg text-shades-100 font-light"}>دریافت مشاوره</p>
                    <KeyboardDoubleArrowLeft className = {"text-shades-100"} sx = {{fontSize: 25}}/>
                </div>
            </a>
        </div>
    )
}

// guarantee