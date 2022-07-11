import Stack from "../Common/Stack";

const col1 = [
    "پرکردن و ارسال مدارک ایده یا استارتاپ ",
    "ارزیابی و ارزش‌گذاری  "
]

const col2 = [
    "موافقت طرفین و امضای قرارداد همکاری",
    "معرفی به سرمایه‌گذار "
]
const col3 = [
    "مدیریت پروژه ",
    "شهرت و سوددهی ",
]

export default function Path() {
    return (
        <div>
        <div
            className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6"}>
            <img src = {"/common/h0.png"} className = {"w-12"}/>
            <p className = {"text-justify font-light text-shades-10 text-2xl md:text-4xl"}>مسیر همکاری سرمایه‌پذیران</p>
        </div>
        <div className = {"flex flex-col xl:flex-row justify-between gap-16 mt-16"}>
            <Stack title = {"تکمیل فرم و ارسال مدارک"} src = {"/common/h1.png"} color = {1} bodyItems = {col1}/>
            <Stack title = {"عقد قرارداد"} src = {"/common/h2.png"} color = {2} bodyItems = {col2}/>
            <Stack title = {"مدیریت و بازدهی"} src = {"/common/h3.png"} color = {3} bodyItems = {col3} basis = {"basis-1/4"}/>
        </div>
        </div>
    )
}



