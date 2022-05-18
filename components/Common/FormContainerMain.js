import styles from "/styles/Home.module.css"
import MainForm from "../Home/MainForm";

export default function FormContainerMain() {
    return (
        <div>
            <div className = {styles.formContainer + " flex items-end justify-center pb-24"}>
                <div className = {" max-w-7xl flex flex-row justify-between items-center gap-8"}>
                    <div className = {" flex flex-row"}>
                        <img src = {"hexagonal-form.png"} className = {"h-96 ml-6"} alt = {"hexagonal-form"}/>
                        <div className = {"flex flex-col"}>
                            <p className = {styles.gradientText + " text-4xl text-light leading-[unset] mt-2"}>شروع
                                همکاری
                                در ۳
                                گام</p>
                            <p className = {styles.gradientText + " text-base text-light leading-[unset] my-16"}><span
                                className = {styles.accentText}>فرم ثبت نام </span>
                                را با اطلاعات مورد نیاز پر کنید.</p>
                            <p className = {styles.gradientText + " text-base text-light leading-[unset] my-4"}>
                                تیم ما با شما تماس گرفته و مشاوره تخصصی خود را در اختیار شما می‌گذارد.</p>

                            <p className = {styles.gradientText + " text-base text-light leading-[unset] my-16"}>
                                همکاری مشترک شروع شد!</p>
                        </div>
                    </div>
                    <div id = {"MainForm"}>
                        <MainForm/>
                    </div>

                </div>
            </div>
        </div>

    )
}