import InfoItem from "./InfoItem";
import CountUpItem from "./CountUpItem";

export default function InfoBox() {
    return (
        <div className = {"flex flex-col-reverse gap-10 lg:flex-row items-center justify-center lg:justify-around mt-32 lg:mt-56"} id = {"InfoBox"}>
            <InfoItem prefix = {""} number = {20} suffix = {"+"} body = {"تجربه کاری"}/>
            <InfoItem prefix = {""} number = {20} suffix = {"+"} body = {"شریک تجاری"}/>
            <InfoItem prefix = {""} number = {20} suffix = {"+"} body = {"سرمایه گذار"}/>
            <InfoItem prefix = {""} number = {20} suffix = {"+"} body = {"سرمایه پذیر"}/>
        </div>
    )
}