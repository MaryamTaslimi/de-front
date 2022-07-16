import Image from "next/image"
import styles from "/styles/Home.module.css"

export default function HeroText() {
    return (
        <div className = {styles.wrap + " static z-10"}>
            <div className = {" flex flex-col"}>
                <p className = {styles.text1 + " text-[#C1C1C1] font-light text-5xl opacity-25 duration-700 ease-out"}>آینده،</p>
                <div>
                    <p className = {" text-accent font-light text-5xl mt-10"}>از اینجا شروع
                        می‌شود...</p>
                </div>
            </div>
            <div className={"absolute right-[47.19%] top-[43%]"}>
                <Image src = "/home/lamp-on.png" className = {styles.img + " opacity-25 duration-700 ease-out"}
                       width = {100}
                       height = {100} alt = "hover"/>
            </div>

        </div>
    );
}