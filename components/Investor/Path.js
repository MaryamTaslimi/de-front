import Stack from "../Common/Stack";

const col1 = [
    "تکمیل فرم",
    "جلسه مشاوره سرمایه‌گذاری و توضیح ریسک ",
]

const col2 = [
    "ارائه پیشنهاد سرمایه‌گذاری",
    "پذیرش پیشنهاد و عقد تفاهم‌نامه "
]
const col3 = [
    "مدیریت پروژه و ارائه گزارش از فرایند رشد",
    "پرداخت سود "
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
                <div className = {"flex flex-col xl:flex-row justify-between gap-16 mt-16"}>
                    <Stack title = {"تکمیل فرم و مشاوره"} src = {"/common/h1.png"} color = {1} bodyItems = {col1}/>
                    <Stack title = {"عقد قرارداد"} src = {"/common/h2.png"} color = {2} bodyItems = {col2}/>
                    <Stack title = {"مدیریت و بازدهی"} src = {"/common/h3.png"} color = {3} bodyItems = {col3}/>
                </div>

            </div>
        </div>
    )
}


