import {useEffect, useState} from "react";

export default function ExpandAbleItemMobile({title, body, orientation, color, bottom}) {

    return (
        <div
            className = {"relative flex flex-row -mt-24 " + (orientation === "right" ? "justify-start" : "justify-end")}>
            <img src = {`/home/tri-${color}-${orientation}.png`} className = {"h-[90vw] w-auto"} alt = {"triangle"}/>
            <div
                dir ={orientation === "right" ? "rtl" : "ltr"}
                className = {"absolute flex flex-col justify-center w-[32vw] " + (orientation === "right" ? "mr-4 " : "ml-4 ") + bottom}>
                <p className = {"text-shades-80 text-sm sm:text-lg font-light"}>{title}</p>
                <p className = {"text-primary text-base sm:text-2xl font-light border-t-2 border-shades-60 pt-2"}>{body}</p>
            </div>
        </div>
    )
}