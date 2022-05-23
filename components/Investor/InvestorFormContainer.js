import styles from "/styles/Home.module.css"
import MainForm from "../Home/MainForm";
import InvestorForm from "./InvestorForm";

export default function InvestorFormContainer() {
    return (
        <div>
            <div className = {styles.formContainer + " hidden min-h-[130vh] lg:flex items-end justify-center pb-24"}>
                <div className = {" flex flex-row justify-between items-center gap-8"}>
                    <InvestorForm/>
                </div>
            </div>

            <div className = {"lg:hidden pb-24 "}>
                <img src={"/common/papercut-mobile.png"} className={"object-none"}/>
                <div className = {" flex flex-col justify-between items-center gap-8 bg-shades-10 pb-4"} id={"formMobile"}>
                    <InvestorForm/>
                </div>
            </div>
        </div>

    )
}