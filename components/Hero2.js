import {useEffect, useRef} from "react";
import styles from "/styles/Hero.module.css"

export default function Hero2() {
    const imageRef = useRef();

    useEffect(() => {
        requestAnimationFrame(() => {
            window.addEventListener('scroll', event => {
                const rotation = Math.log(window.pageYOffset) * 7;
                imageRef.current.style.transform = `rotate(${rotation}deg)`;
            });
        });
    }, []);
    return (
        <div className = "absolute -left-28 -top-28">
            <img
                ref = {imageRef}
                src = "/gear.png"
                className = {styles.gear + " transition-all opacity-10 z-0"}
                alt = "Circles Icon"
            />
        </div>

    );
}

