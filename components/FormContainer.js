import Header from "./Header";
import HeroText from "./HeroText";
import styles from "/styles/Home.module.css"


export default function FormContainer() {
    return (
        <div className = {styles.formContainer + " flex flex-row justify-between items-center px-6 sm:px-20"}>
            <div className = {" flex flex-row"}>
                <img src = {"hexagonal-form.png"} className = {"h-96 ml-6"} alt = {"hexagonal-form"}/>
                <div className = {"flex flex-col"}>
                    <p className = {styles.gradientText + " text-4xl text-light leading-[unset] mt-2"}>شروع همکاری در ۳
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

        </div>
    )
}