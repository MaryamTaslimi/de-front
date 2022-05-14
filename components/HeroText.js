import Image from "next/image"
import styles from "/styles/Hero.module.css"

export default function HeroText() {
    return (
        <div className = {styles.wrap + " static z-10"}>
            <div className = {" flex flex-col"}>
                <p className = {styles.text1 + " text-[#C1C1C1] text-light text-5xl opacity-25 duration-700 ease-out"}>آینده،</p>
                <div>
                    <p className = {styles.old + " text-accent text-extralight text-5xl mt-10"}>از اینجا شروع
                        می‌شود...</p>
                    <p className = {styles.new + " opacity-0 text-accent text-light text-5xl -mt-12"}>از اینجا شروع
                        شد...</p>
                </div>
            </div>
            <div className={"absolute right-[47%] top-32"}>
                <Image src = "/lamp-on.png" className = {styles.img + " opacity-25 duration-700 ease-out"}
                       width = {120}
                       height = {120} alt = "hover"/>
            </div>

        </div>
    );
}