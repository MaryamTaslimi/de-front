import styles from "/styles/Home.module.css"
import PartnershipForm from "./PartnershipForm";

export default function PartnershipFormContainer() {
    return (
        <div>
            <div className = {styles.formContainer + " flex items-end justify-center pb-24"}>
                <div className = {" max-w-6xl flex flex-row justify-between items-center gap-8"}>
                    <PartnershipForm/>
                </div>
            </div>
        </div>

    )
}