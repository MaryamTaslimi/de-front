import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import {grey} from "@mui/material/colors";

export default function Introduction() {
    return (
        <div>
            <div className = {"flex flex-row items-center border-b border-shades-60 pb-4 mb-4 lg:w-3/5"}>
                <img src = {"/common/logo.png"} alt = {"logo"} className = {"w-16"}/>
                <p className = {"text-2xl md:text-4xl font-light text-white mr-4"}>خانه خلاق و نوآوری دنیای اقتصاد </p>
            </div>
            <div className = {"flex flex-col lg:flex-row lg:w-3/5 gap-4 lg:gap-8"}>
                <p className = {"text-sm md:text-base font-light text-white grow-0 self-stretch text-justify"}>خانه خلاق و نوآوری دنیای اقتصاد، با تکیه بر
                    تجربه، اعتبار و دانش گروه رسانه ای دنیای اقتصاد از سال 1400 فعالیت خود را در حوزه سرمایه‌گذاری
                    خطرپذیر (Venture capital)آغاز کرد. </p>
                <p className = {"text-base font-light text-white grow self-stretch text-justify"}>اکنون خانه خلاق و نوآوری دنیای اقتصاد با
                    شعار «آینده از اینجا شروع می‌شود» قصد دارد تعاملی سازنده میان اشخاص حقیقی و شرکت‌های مستعد
                    سرمایه‌گذاری و دانش‌بنیان‌ها ایجاد کند و پلی میان نظام اقتصادی سنتی و مدرن باشد.
                </p>
            </div>
            <a className={"flex flex-row justify-end items-center lg:w-3/5 mt-6"}>
                <p className={"text-sm md:text-base font-light text-white ml-2"}>با ما بیشتر آشنا شوید</p>
                <ReadMoreRoundedIcon className={"rotate-180"} sx = {{color: grey[50], fontSize: 35}}/>
            </a>
        </div>
    )
}