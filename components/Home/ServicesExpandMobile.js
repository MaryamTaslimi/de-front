import {useState} from "react";
import HoveringDiamond from "./HoveringDiamond";
import ExpandAbleItem from "./ExpandAbleItem";
import ExpandAbleItemMobile from "./ExpandAbleItemMobile";


const items = [
    {
        title: "مرجعیت و تخصص",
        body: "در حوزه اقتصاد و صنعت از سال ۸۱",
        bottom: "bottom-[40%]"

    },
    {
        title: "مشاوره",
        body: "تحلیل روند صنایع، کسب و کارها و ارائه مشاوره تخصصی به منظور پیش بینی اقتصادی",
        bottom: "bottom-[24%]"

    },
    {
        title: "بی‌طرف",
        body: "بی طرفی و عدم حمایت از صنعتی خاص",
        bottom: "bottom-[30%]"
    },
    {
        title: "آموزش",
        body: "آموزش تخصصی و به روز",
        bottom: "bottom-[37%]"
    },
    {
        title: "قابل اعتماد",
        body: "شناخته شده و قابل اعتماد بودن",
        bottom: "bottom-[35%]"
    },
]


export default function ServicesExpandMobile() {
    return (
        <div className = {"lg:hidden flex flex-col mt-16"}>
            <div className = {"relative flex flex-row justify-start"}>
                <img src = {'/home/tri-yellow-right.png'} className = {"h-[80vw] w-auto"}/>
                <div className = {"absolute mr-4 bottom-[43%]"}>
                    <p className = {"text-shades-100 text-2xl sm:text-3xl font-light"}>چرا ما؟</p>
                </div>
            </div>


            {
                items.map((item, index) =>
                    (
                        <ExpandAbleItemMobile key = {item.title} title = {item.title} body = {item.body}
                                              orientation = {index % 2 === 0 ? "left" : "right"}
                                              color = {index + 1 < items.length ? "white" : "yellow"}
                                              bottom = {item.bottom}/>
                    )
                )
            }
        </div>
    )
}