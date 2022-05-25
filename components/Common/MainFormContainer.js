import styles from "/styles/Home.module.css"
import MainForm from "../Home/MainForm";
import Stack from "./Stack";
import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";

const items = [
    {title: "فرم ثبت نام را با اطلاعات مورد نیاز پر کنید.", src: "/common/h1.png"},
    {title: "ما با شما تماس می‌گیریم و مراحل همکاری را طراحی می‌کنیم."
    , src: "/common/h2.png"},
    {title: "همکاری مشترک شروع شد!", src: "/common/h3.png"},
]


export default function MainFormContainer() {
    return (
        <div>
            <div className = {styles.formContainer + " hidden min-h-[120vh] xl:min-h-[160vh] lg:flex items-end justify-center  py-16 2xl:pb-32"}>
                <div className = {" xl:w-2/3 px-20 xl:px-0 flex flex-row justify-between items-center gap-8"}>
                    <div className = {" relative flex flex-col gap-10"}>
                        <div className = {"flex flex-row items-center gap-4"}>
                            <img src = "/common/h0.png" className = {"w-12 z-10"}/>
                            <p className = {styles.gradientText + " font-light text-2xl text-shades-10"}>شروع همکاری در
                                ۳
                                گام</p>
                        </div>

                        <div className = {"flex flex-col gap-10"}>
                            {
                                items.map((item) => {
                                        return (
                                            <div key = {item}
                                                 className = {"flex flex-row items-center gap-4"}>
                                                <img src = {item.src} className = {" w-12 z-10"}/>
                                                <p className = {"font-light text-sm md:text-lg text-primary"}>
                                                    {item.title}
                                                </p>
                                            </div>
                                        )
                                    }
                                )
                            }

                        </div>
                        <div className = {"absolute right-[23px] top-1 border-r-2 border-shades-60 h-[95%]"}/>

                    </div>
                    <MainForm/>
                </div>
            </div>


            <div className={"lg:hidden"}>
                <div className = {styles.formContainerMobile + " flex items-end justify-center px-4" } id={"formMobile"}>
                    <div className = {"flex flex-col gap-8 pb-10"}>
                        <div className = {"flex flex-row items-center gap-4"}>
                            <img src = "/common/h0.png" className = {"w-12 z-10"}/>
                            <p className = {styles.gradientText + " font-light text-2xl text-shades-10"}>شروع همکاری در
                                ۳
                                گام</p>
                        </div>

                        <div className = {"flex flex-col gap-10"}>
                            {
                                items.map((item) => {
                                        return (
                                            <div key = {item}
                                                 className = {"flex flex-row items-center gap-4"}>
                                                <img src = {item.src} className = {" w-12 z-10"}/>
                                                <p className = {"font-light text-sm md:text-lg text-primary"}>
                                                    {item.title}
                                                </p>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
                <MainForm/>
            </div>

        </div>

    )
}