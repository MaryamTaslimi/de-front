import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import {grey} from "@mui/material/colors";

export default function Introduction() {
    return (
        <div>
            <div className = {"flex flex-row items-center border-b border-shades-60 pb-4 mb-4 w-3/5"}>
                <img src = {"/common/logo.png"} alt = {"logo"} className = {"w-16"}/>
                <p className = {"text-4xl font-light text-white mr-4"}>مرکز نوآوری و کسب و کار دنیای اقتصاد </p>
            </div>
            <div className = {"flex flex-row w-3/5"}>
                <p className = {"text-base font-light text-white grow-0 self-stretch text-justify ml-8"}>مرکز نوآوری و کسب‌وکار دیجیتال دنیای اقتصاد، با تکیه بر
                    تجربه، اعتبار و دانش گروه رسانه ای دنیای اقتصاد از سال 1400 فعالیت خود را در حوزه سرمایه‌گذاری
                    خطرپذیر (Venture capital)آغاز کرد. </p>
                <p className = {"text-base font-light text-white grow self-stretch text-justify"}>اکنون مرکز نوآوری و کسب‌وکار دیجیتال دنیای اقتصاد با
                    شعار «آینده از اینجا شروع می‌شود» قصد دارد تعاملی سازنده میان اشخاص حقیقی و شرکت‌های مستعد
                    سرمایه‌گذاری و دانش‌بنیان‌ها ایجاد کند و پلی میان نظام اقتصادی سنتی و مدرن باشد.
                </p>
            </div>
            <a className={"flex flex-row justify-end items-center w-3/5 mt-6"}>
                <p className={"text-base font-light text-white ml-2"}>بیشتر آشنا شوید</p>
                <ReadMoreRoundedIcon className={"rotate-180"} sx = {{color: grey[50], fontSize: 35}}/>
            </a>
        </div>
    )
}