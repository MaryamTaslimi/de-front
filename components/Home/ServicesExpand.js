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
        <div>
            <div className = {"flex justify-center items-center"}>
                <HoveringDiamond/>
            </div>
            <div className = {"grid grid-cols-2 grid-rows-2 gap-24"}>
                {
                    primaryItems.map(primaryItem => (
                        <ExpandableItem key={primaryItem.title} title={primaryItem.title} body={primaryItem.body} src={"/diamond-primary.png"}/>
                    ))
                }
            </div>
        </div>
    )
}