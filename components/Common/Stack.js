import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";
import {useEffect, useRef} from "react";

export default function Stack({title, src, color, bodyItems}) {
    const colorClass = useRef("");
    const basis = useRef("");
    const lastId = useRef("");
    const height = useRef("100%");
    useEffect(() => {
        let h1 = document.getElementById(lastId.current).offsetHeight;
        let h2 = document.getElementById(color).offsetHeight;
        height.current = `${h2 - h1}px`
        console.log(height.current)
    }, [color, lastId])

    switch (color) {
        case 1:
            colorClass.current = "text-shades-40";
            basis.current = "basis-[30%]"
            break;
        case 2:
            colorClass.current = "text-accent-50";
            break;
        case 3:
            colorClass.current = "text-accent";
            break;
    }

    return (
        <div className = {"flex flex-col items-start gap-10 " + basis.current}>
            <div className = {"flex flex-row items-center gap-4"}>
                <img src = {src} className = {"w-12"}/>
                <p className = {"font-light text-2xl text-shades-10"}>{title}</p>
            </div>
            <div className = {"relative flex flex-col gap-10"} id = {color}>
                {
                    bodyItems.map((item, index, array) => {
                            if (index + 1 === array.length) {
                                lastId.current = color + "" + index
                            }
                            return (
                                <div key = {item} id = {color + "" + index}
                                     className = {"flex flex-row items-stretch gap-4 mr-1.5 h-8"}>
                                    <HexagonRoundedIcon className = {colorClass.current + " rotate-90 z-10"}
                                                        sx = {{fontSize: "xx-large"}}/>
                                    <p className = {"font-light text-lg text-shades-10"}>
                                        {item}
                                    </p>
                                </div>
                            )
                        }
                    )
                }

                <div className = {`absolute right-5 top-1 border-r-2 border-shades-60 h-[95%]`}/>

            </div>

        </div>
    )
}