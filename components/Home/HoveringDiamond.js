import {useState} from "react";

export default function HoveringDiamond() {
    const [hover, setHover] = useState(false);
    return (
        <div>
            <div className = {"relative flex flex-col justify-center items-center transition duration-70"}>
                <div>

                    <div
                        className = {"hovering flex flex-row-reverse justify-center items-center transition duration-700"}
                        onMouseOver = {
                            () => {
                                setHover(true)
                            }
                        }
                        onMouseOut = {
                            (event) => {
                                // to check the mouse is actually out of the box (= hovering items)!
                                if (!(event.relatedTarget.className).includes("hovering")) {
                                    setHover(false)
                                }
                            }
                        }
                    >

                        <img src = {"/home/diamond-white.png"}
                             className = {"hovering w-96 z-10"}
                        />
                        <p className = {"expandable absolute z-20 text-primary font-light text-2xl transition duration-500" + (hover && " opacity-0")}>چرا
                            ما</p>
                        <img src = {"/common/logo.png"}
                             className = {"expandable w-24 absolute z-20 text-shades-100 font-light text-2xl transition duration-500" + (hover ? " opacity-100" : " opacity-0")}/>
                    </div>
                </div>
            </div>

        </div>
    )
}