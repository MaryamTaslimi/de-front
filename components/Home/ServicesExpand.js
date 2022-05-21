import {useState} from "react";
import HoveringDiamond from "./HoveringDiamond";
import ExpandableItem from "./ExpandableItem";

const primaryItems = [
    {
        title: "مرجعیت و تخصص",
        body: "مرجعیت و تخصص در حوزه اقتصاد و صنعت از سال ۸۱"
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
        <div className={"flex flex-col justify-center items-center"}>
            <div className = {" xl:w-2/3 flex justify-center items-center mt-56"}>
                <HoveringDiamond/>
            </div>
            <div className = {"grid grid-cols-3 place-items-stretch justify-items-center"}>

                <ExpandableItem title = {primaryItems[0].title} body = {primaryItems[0].body}
                                src = {"/home/diamond-primary.png"}/>
                <div className = {"z-10 border-x border-primary opacity-50"}/>
                <ExpandableItem key = {primaryItems[1].title} title = {primaryItems[1].title}
                                body = {primaryItems[1].body} src = {"/home/diamond-primary.png"}/>
                <div className = {"z-10 border-x h-24 border-primary opacity-50"}/>
                <div className = {"z-10 border-x h-24 border-primary opacity-50"}/>
                <div className = {"z-10 border-x h-24 border-primary opacity-50"}/>
                <ExpandableItem key = {primaryItems[2].title} title = {primaryItems[2].title}
                                body = {primaryItems[2].body} src = {"/home/diamond-primary.png"}/>
                <div className = {"z-10 border-x border-primary opacity-50"}/>

                <ExpandableItem key = {primaryItems[3].title} title = {primaryItems[3].title}
                                body = {primaryItems[3].body} src = {"/home/diamond-primary.png"}/>
            </div>
            <div className = {"flex justify-center items-center"}>
                <ExpandableItem key = {accentItem[0].title} title = {accentItem[0].title}
                                body = {accentItem[0].body} src = {"/home/diamond-accent.png"}/>
            </div>
        </div>
    )
}