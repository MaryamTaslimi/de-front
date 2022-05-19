import styles from "/styles/Home.module.css"
import StartupForm from "./StartupForm";

export default function StartupFormContainer() {
    return (
        <div>
            <div className = {styles.formContainer + " flex items-end justify-center pb-24"}>
                <div className = {" max-w-6xl flex flex-row justify-between items-center gap-8"}>
                    <StartupForm/>
                </div>
            </div>
        </div>

    )
}