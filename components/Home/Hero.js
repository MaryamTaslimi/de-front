import Header from "./Header";
import HeroText from "./HeroText";
import styles from "/styles/Home.module.css"
import Chevron from "./Chevron";


export default function Hero() {
    return (
        <div className = {"flex flex-col"}>
            <div className = {styles.heroContainer + " flex flex-col"}>
                <Header transparent = {true}/>
                <div className = "py-12 px-6 sm:px-20">
                    <HeroText/>
                </div>
            </div>
            <div>
                <a href = {"#InfoBox"}>
                    <Chevron/>
                    <Chevron/>
                </a>
            </div>
        </div>
    )
}