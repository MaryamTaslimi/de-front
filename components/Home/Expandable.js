import styles from "/styles/Home.module.css"
import {useEffect, useState} from "react";

export default function Expandable() {
    const [hover, setHover] = useState(false);

    useEffect(() => {
        document.body.addEventListener('mouseleave', () => {
            console.log("here")
        }, true);
    }, [])
    return (
        <div className = {"relative flex flex-col justify-center items-center"}>
            <div className = {""}>

                <div
                    className = {"absolute -top-1/4 left-1/2 px-8 w-96 flex flex-col justify-center items-center self-start text-primary z-20 transition duration-700 filter-none " + (hover ? " opacity-100 -translate-x-1/2 translate-y-2/3" : " opacity-0")}>
                    <p className = {"mb-2 text-shades-80 text-light text-lg"}>مشاوره</p>
                    <p className = {"border-t-2 border-shades-60 text-center text-2xl pt-4"}>
                        تحلیل روند صنایع، کسب و کارها و ارائه مشاوره تخصصی به منظور پیش بینی اقتصادی
                    </p>
                </div>


                <div
                    className = {"flex flex-row-reverse justify-center items-center hover:scale-150 transition duration-700"}
                    onMouseEnter = {
                        () => {
                            setHover(true)
                        }
                    }
                    onMouseLeave = {
                        () => {
                            // setTimeout(function () {
                            //     setHover(false)
                            //     console.log("now")
                            // }, 300);
                            setHover(false)
                            console.log("now")
                        }
                    }
                >

                    <img src = {"/diamond-accent.png"}
                         className = {styles.diamondWhite + " w-96 z-10 hover:brightness-0 hover:invert"}

                    />
                    <p className = {" absolute z-20 text-shades-100 text-light text-2xl transition duration-700"}>مشاوره</p>
                </div>
            </div>
        </div>
    )
}
