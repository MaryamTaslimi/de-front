import styles from "/styles/Home.module.css"
import PartnershipForm from "./PartnershipForm";

export default function PartnershipFormContainer() {
    return (
        <div>
            <div className = {styles.formContainer + " hidden min-h-[210vh] lg:flex items-end justify-center pb-24"}>
                <div className = {" flex flex-row justify-between items-center gap-8"}>
                    <PartnershipForm/>
                </div>
            </div>

            <div className = {"lg:hidden pb-24 "}>
                <img src={"/common/papercut-mobile.png"} className={"object-none"}/>
                <div className = {" flex flex-col justify-between items-center gap-8 bg-shades-10 pb-4"} id={"formMobile"}>
                    <PartnershipForm/>
                </div>
            </div>

        </div>

    )
}