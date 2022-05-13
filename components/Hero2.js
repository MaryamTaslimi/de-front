import {ScrollRotate} from 'react-scroll-rotate';
import Image from "next/image";
import {useEffect, useRef} from "react";

export default function Hero2() {
    const imageRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', event => {
            requestAnimationFrame(() => {
                const rotation = Math.log(window.pageYOffset) * 7;
                imageRef.current.style.transform = `rotate(${rotation}deg)`;
            });
        });
    }, []);
    return (
        <img
            ref = {imageRef}
            src = "/gear.png"
            className="w-auto"
            alt = "Circles Icon"
        />
    );
}

