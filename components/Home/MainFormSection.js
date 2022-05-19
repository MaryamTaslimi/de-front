import styles from "/styles/Home.module.css"
import MainForm from "./MainForm";
import MainFormContainer from "../Common/MainFormContainer";


export default function MainFormSection() {
    return (
        <div>
            <MainFormContainer/>
            <img src = {"/home/handShake.png"} className = {"w-full"}/>
            <div className = {styles.formContainerDown + " flex items-end justify-center pb-24"}/>
        </div>

    )
}