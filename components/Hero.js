import Header from "./Header";
import HeroText from "./HeroText";
import styles from "/styles/Home.module.css"


export default function Hero() {
    return (
        <div className = {styles.heroContainer + " flex flex-col"}>
            <Header transparent = {true}/>
            <div className = "py-12 px-6 sm:px-20">
                <HeroText/>
            </div>
        </div>
    )
}