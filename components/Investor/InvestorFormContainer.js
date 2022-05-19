import styles from "/styles/Home.module.css"
import MainForm from "../Home/MainForm";
import InvestorForm from "./InvestorForm";

export default function InvestorFormContainer() {
    return (
        <div>
            <div className = {styles.formContainer + " flex items-end justify-center pb-24"}>
                <div className = {" max-w-6xl flex flex-row justify-between items-center gap-8"}>
                    <InvestorForm/>
                </div>
            </div>
        </div>

    )
}