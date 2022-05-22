import {useEffect, useRef} from "react";

export default function Gear({top, x, size}) {
    const imageRef = useRef();

    useEffect(() => {
        requestAnimationFrame(() => {
            window.addEventListener('scroll', event => {
                const rotation = Math.log(window.pageYOffset) * 25;
                imageRef.current.style.transform = `rotate(${rotation}deg)`;
            });
        });
    }, []);
    return (
        <div className = {"hidden lg:block absolute " + top + " " + x}>
            <img
                ref = {imageRef}
                src = "/home/gear.png"
                className = {" opacity-[0.04] " + size}
                alt = "gear"
            />
        </div>

    );
}

