import Header from "../Common/Header";
import HeroText from "./HeroText";
import styles from "/styles/Home.module.css"
import Chevron from "../Common/Chevron";
import Image from "next/image"

export default function Hero() {
    return (
        <div>
            <div className = {"hidden lg:flex flex-col"}>
                <div className = {styles.heroContainer + " flex flex-col"}>
                    <Header transparent = {true}/>
                    <div className = "py-12 px-6 sm:px-20">
                        <HeroText/>
                    </div>
                </div>
                <div>
                    <a href = {"#InfoBox"}>
                        <Chevron/>
                    </a>
                </div>
            </div>

        </div>
    )
}