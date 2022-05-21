import Stack from "../Common/Stack";

const col1 = [
    "پرکردن و ارسال فرم سرمایه‌گذاری",
    "تماس برای هماهنگی جلسه معارفه ",
    "برگزاری جلسه و توضیح ریسک، ارزش‌افزوده و شفاف‌سازی مزایا ",
    "مشاوره تخصصی برای سرمایه‌گذاری باتوجه‌به میزان سرمایه‌ی شما "
]

const col2 = [
    "ارائه پیشنهادهای سرمایه‌گذاری خطرپذیر باتوجه‌به نیاز بازارهای روز اقتصادی",
    "پذیرش پیشنهاد و عقد تفاهم‌نامه "
]
const col3 = [
    "مدیریت سرمایه از سوی مرکز نوآوری دنیای اقتصاد",
    "ارائه گزارشات منظم از فرایند رشد",
    "پرداخت سود و خروج یا پرداخت سود و شروع همکاری مجدد "
]

export default function Path() {
    return (
        <div>
            <div className = {"flex flex-col"}>
                <div
                    className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6"}>
                    <img src = {"/common/h0.png"} className = {"w-12"}/>
                    <p className = {"text-justify font-light text-shades-10 text-2xl md:text-4xl"}>مسیر همکاری سرمایه‌گذاران</p>
                </div>
                <div className = {"flex flex-row justify-between flex-wrap gap-16 mt-16"}>
                    <Stack title = {"پرکردن فرم و مشاوره تخصصی"} src = {"/common/h1.png"} color = {1} bodyItems = {col1}/>
                    <Stack title = {"عقد قرارداد"} src = {"/common/h2.png"} color = {2} bodyItems = {col2}/>
                    <Stack title = {"مدیریت و همراهی پروژه"} src = {"/common/h3.png"} color = {3} bodyItems = {col3} className={"basis-1/5"}/>
                </div>

            </div>
        </div>
    )
}


