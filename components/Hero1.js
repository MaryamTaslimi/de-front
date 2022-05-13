import Image from "next/image"
import {useState} from "react";
import styles from "/styles/Hero1.module.css"

export default function Hero1() {
    return (
        <div className = {styles.wrap + " flex flex-row justify-start items-center"}>
            <Image src = "/lamp-on.png" className = {styles.img + " opacity-20 duration-700 ease-out"} width = {80}
                   height = {80} alt = "hover"/>
            <div className = "mr-6 flex flex-col">
                <p className = {styles.text1 + " text-[#C1C1C1] text-light text-5xl opacity-20 duration-700 ease-out"}>آینده،</p>
                <div>
                    <p className = {styles.old + " text-accent text-extralight text-5xl mt-10"}>از اینجا شروع
                        می‌شود...</p>
                    <p className = {styles.new + " opacity-0 text-accent text-light text-5xl -mt-12"}>از اینجا شروع
                        شد...</p>
                </div>
            </div>
        </div>
    );
}