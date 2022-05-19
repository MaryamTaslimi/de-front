import styles from "/styles/Home.module.css"
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import {grey} from "@mui/material/colors";

export default function ImagesSection() {
    return (
        <div className = {"flex flex-col"}>
            <div
                className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                <p className = {"text-justify font-light text-shades-10 text-4xl"}>تیم ما، خدمات تخصصی خود را به ۳ گروه
                    مختلف ارائه می‌کند:</p>
            </div>
            <div className = {"flex flex-col md:flex-row justify-between gap-8"}>

                <div className = {styles.imageBg1 + " flex flex-col p-4 justify-end items-start gap-4 md:gap-16"}>
                    <p className = {"text-2xl text-shades-10 font-light"}>
                        سرمایه‌گذاران حقیقی و حقوقی،شتاب‌دهنده‌ها <br/>و<br/>
                        سرمایه‌گذاران خطرپذیر
                    </p>
                    <a href = "/investor" className = {"text-2xl text-shades-10 font-light self-end"}>
                        <div className = {"flex flex-row items-center"}>
                            <p className = {"text-lg text-shades-10 font-light"}>
                                سرمایه‌گذاران
                            </p>
                            <KeyboardArrowLeftRoundedIcon className = {"text-shades-10"} sx = {{fontSize: 25}}/>
                        </div>
                    </a>
                </div>

                <div className = {styles.imageBg2 + " flex flex-col p-4 justify-end items-start gap-4 md:gap-16"}>
                    <p className = {"text-2xl text-shades-10 font-light"}>
                        صاحبان کسب‌وکارها
                        <br className = {"hidden md:block"}/>
                        <br className = {"hidden md:block"}/>
                        <br className = {"hidden md:block"}/>
                    </p>
                    <a href = "/partnership" className = {"text-2xl text-shades-10 font-light self-end"}>
                        <div className = {"flex flex-row items-center"}>
                            <p className = {"text-lg text-shades-10 font-light"}>شراکت استراتژیک </p>
                            <KeyboardArrowLeftRoundedIcon className = {"text-shades-10"} sx = {{fontSize: 25}}/>
                        </div>
                    </a>
                </div>

                <div className = {styles.imageBg3 + " flex flex-col p-4 justify-end items-start gap-4 md:gap-16"}>
                    <p className = {"text-2xl text-shades-10 font-light"}>
                        شرکت‌های دانش‌بنیان، ایده‌پردازان و
                        گروه‌های استارتاپی
                        <br className = {"hidden md:block"}/>
                        <br className = {"hidden md:block"}/>
                    </p>
                    <a href = "/startup" className = {"text-2xl text-shades-10 font-light self-end"}>
                        <div className = {"flex flex-row items-center"}>
                            <p className = {"text-lg text-shades-10 font-light"}>سرمایه پذیران</p>
                            <KeyboardArrowLeftRoundedIcon className = {"text-shades-10"} sx = {{fontSize: 25}}/>
                        </div>
                    </a>
                </div>

            </div>

        </div>
    )
}