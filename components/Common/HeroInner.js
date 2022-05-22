import styles from "../../styles/Home.module.css";
import Header from "./Header";
import Chevron from "./Chevron";

import {useRef} from "react";

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
            <div className={"lg:hidden"}>
                <Header transparent = {true}/>
            </div>
            <div className = {colorClass.current + " min-h-[45vh] md:min-h-[75vh] flex flex-col justify-end lg:justify-start"}>
                <div className={"hidden lg:block"}>
                    <Header transparent = {true}/>
                </div>

                <div className = "flex flex-col gap-16 py-6 md:py-12 px-4 md:px-20">
                    <p className={"hidden md:block font-light text-4xl lg:text-6xl text-shades-10"}>{title}</p>
                    <p className={"font-light text-lg lg:text-2xl text-shades-10 text-center md:text-right"}>{body}</p>
                </div>
            </div>
            <div className={"hidden lg:block"}>
                <Chevron/>
                <Chevron/>
            </div>
        </div>
    )
}