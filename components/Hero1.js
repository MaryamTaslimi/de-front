import Image from "next/image"
import styles from "/styles/Hero.module.css"

export default function Hero1() {
    return (
        <div>
            <div className = {styles.wrap + " flex flex-row justify-start items-center"}>
                <div className = "mr-6 flex flex-col">
                    <p className = {styles.text1 + " text-[#C1C1C1] text-light text-5xl opacity-25 duration-700 ease-out"}>آینده،</p>
                    <div>
                        <p className = {styles.old + " text-accent text-extralight text-5xl mt-10"}>از اینجا شروع
                            می‌شود...</p>
                        <p className = {styles.new + " opacity-0 text-accent text-light text-5xl -mt-12"}>از اینجا شروع
                            شد...</p>
                    </div>
                </div>
                <Image src = "/lamp-on.png" className = {styles.img + " opacity-25 duration-700 ease-out"} width = {100}
                       height = {100} alt = "hover"/>
            </div>
        </div>
    );
}