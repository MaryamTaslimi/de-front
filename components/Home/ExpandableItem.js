import {useState} from "react";

export default function ExpandableItem({title, body, src}) {
    const [hover, setHover] = useState(false);

    return (
        <div className = {"relative flex flex-col justify-center items-center"}>
            <div>

                <div
                    className = {"expandable absolute -top-1 left-1/2 px-8 w-96 flex flex-col justify-center items-center self-start text-primary z-20 transition duration-700 filter-none " + (hover ? " opacity-100 -translate-x-1/2 translate-y-1" : " opacity-20")}>
                    <p className = {"expandable mb-2 text-shades-80 text-light text-lg"}>{title}</p>
                    <p className = {"expandable border-t-2 border-shades-60 text-center text-2xl pt-4"}>{body}</p>
                </div>


                <div
                    className = {"expandable flex flex-row-reverse justify-center items-center transition duration-700" + (hover && " scale-150")}
                    onMouseOver = {
                        () => {
                            setHover(true)
                        }
                    }
                    onMouseOut = {
                        (event) => {
                            // to check the mouse is actually out of the expandable box (= expandable items)!
                            if ((event.relatedTarget) && !(event.relatedTarget.className).includes("expandable")) {
                                setHover(false)
                            }
                        }
                    }
                >

                    <img src = {src}
                         className = {"expandable w-96 z-10" + (hover && " brightness-0 invert")}
                         alt = {"diamond"}/>
                    <p
                        className = {"expandable absolute z-20 text-shades-100 text-light text-2xl transition duration-500" + (hover && " opacity-0")}>{title}</p>
                </div>
            </div>
        </div>
    )
}
