import styles from "../../styles/Home.module.css";
import Header from "./Header";
import HeroText from "../Home/HeroText";
import Chevron from "./Chevron";
import {useEffect, useRef} from "react";

export default function HeroInner({number, title, body}) {
    const colorClass = useRef(styles.heroContainer);
    switch (number) {
        case 1:
            colorClass.current = styles.heroContainer1;
            break;
        case 2:
            colorClass.current = styles.heroContainer2;
            break;
        case 3:
            colorClass.current = styles.heroContainer3;
            break;
    }

    return (
        <div className = {"flex flex-col"}>
            <div className = {colorClass.current + " flex flex-col"}>
                <Header transparent = {true}/>
                <div className = "flex flex-col gap-16 py-14 px-6 sm:px-20">
                    <p className={"font-light text-6xl text-shades-10"}>{title}</p>
                    <p className={"font-light text-4xl text-shades-10"}>{body}</p>

                </div>
            </div>
            <div>
                <Chevron/>
                <Chevron/>
            </div>
        </div>
    )
}