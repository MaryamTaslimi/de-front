import {useState} from "react";
import HoveringDiamond from "./HoveringDiamond";
import ExpandAbleItem from "./ExpandAbleItem";


const primaryItems = [
    {
        title: "مرجعیت و تخصص",
        body: "مرجعیت و تخصص در حوزه اقتصاد و صنعت از سال ۸۱",
        mobileBody: "مرجعیت و تخصص در حوزه اقتصاد و صنعت از سال ۸۱"
    },
    {
        title: "مشاوره",
        body: "تحلیل روند صنایع، کسب و کارها و ارائه مشاوره تخصصی به منظور پیش بینی اقتصادی",
    },
    {
        title: "بی‌طرف",
        body: "بی طرفی و عدم حمایت از صنعتی خاص"
    },
    {
        title: "آموزش",
        body: "آموزش تخصصی و به روز"
    }
]

const accentItem = [
    {
        title: "قابل اعتماد", body: "شناخته شده و\n" +
            " قابل اعتماد بودن"
    },
]

export default function ServicesExpandable() {
    return (
        <div className = {"hidden lg:flex flex-col justify-center items-center"}>
            <div className = {" xl:w-2/3 flex justify-center items-center mt-56"}>
                <HoveringDiamond/>
            </div>
            <div className = {"grid grid-cols-3 place-items-stretch justify-items-center"}>

                <ExpandAbleItem title = {primaryItems[0].title} body = {primaryItems[0].body}
                                src = {"/home/diamond-primary.png"}/>
                <div className = {"z-10 border-x border-primary opacity-50"}/>
                <ExpandAbleItem key = {primaryItems[1].title} title = {primaryItems[1].title}
                                body = {primaryItems[1].body} src = {"/home/diamond-primary.png"}/>
                <div className = {"z-10 border-x h-24 border-primary opacity-50"}/>
                <div className = {"z-10 border-x h-24 border-primary opacity-50"}/>
                <div className = {"z-10 border-x h-24 border-primary opacity-50"}/>
                <ExpandAbleItem key = {primaryItems[2].title} title = {primaryItems[2].title}
                                body = {primaryItems[2].body} src = {"/home/diamond-primary.png"}/>
                <div className = {"z-10 border-x border-primary opacity-50"}/>

                <ExpandAbleItem key = {primaryItems[3].title} title = {primaryItems[3].title}
                                body = {primaryItems[3].body} src = {"/home/diamond-primary.png"}/>
            </div>
            <div className = {"flex justify-center items-center"}>
                <ExpandAbleItem key = {accentItem[0].title} title = {accentItem[0].title}
                                body = {accentItem[0].body} src = {"/home/diamond-accent.png"}/>
            </div>
        </div>
    )
}