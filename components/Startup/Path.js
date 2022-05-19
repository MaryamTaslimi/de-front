import Stack from "../Common/Stack";

const col1 = [
    "پرکردن و ارسال مدارک ایده یا استارتاپ ",
    "ارزیابی کسب‌وکار، تحقیقات بازار و ارزش‌گذاری استارتاپ از لحاظ: پتانسیل رشد، فنی، بازار هدف، ساپورت تیم در بحران، بررسی هزینه‌ها و تعیین حقوق مدیر پروژه "
]

const col2 = [
    "موافقت طرفین و امضای قرارداد همکاری",
    "انتقال درصدی از سهام شرکت (این مبلغ بسته به ارزش‌گذاری استارتاپ متغیر است) به سرمایه‌گذار"
]
const col3 = [
    "تعیین مدیر پروژه برای پایش مستمر",
    "تزریق سرمایه به‌صورت مرحله‌ای یا یکجا (بسته به نوع استارتاپ)",
    "قرارداد واگذاری مشروط سهام "
]

export default function Path() {
    return (
        <div>
        <div
            className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6"}>
            <img src = {"/common/h0.png"} className = {"w-12"}/>
            <p className = {"text-justify font-light text-shades-10 text-4xl"}>مسیر همکاری سرمایه‌پذیران</p>
        </div>
        <div className = {"flex flex-row justify-between flex-wrap md:flex-nowrap gap-16 mt-16"}>
            <Stack title = {"پرکردن فرم و مشاوره تخصصی"} src = {"/common/h1.png"} color = {1} bodyItems = {col1}/>
            <Stack title = {"عقد قرارداد"} src = {"/common/h2.png"} color = {2} bodyItems = {col2}/>
            <Stack title = {"مدیریت و همراهی پروژه"} src = {"/common/h3.png"} color = {3} bodyItems = {col3} className={"basis-1/5"}/>
        </div>
        </div>
    )
}



