import InfoItem from "./InfoItem";
import CountUpItem from "./CountUpItem";

export default function InfoBox() {
    return (
        <div className = {"flex flex-col-reverse gap-10 lg:flex-row items-center justify-center lg:justify-around mt-32 lg:mt-56"} id = {"InfoBox"}>
            <InfoItem prefix = {""} number = {10} suffix = {"قرارداد"} body = {"تفاهم نامه‌های همکاری"}/>
            <InfoItem prefix = {"بیش از"} number = {20} suffix = {"سال سابقه"} body = {"تجربه کاری"}/>
            <InfoItem prefix = {""} number = {13} suffix = {"پورتفولیو"} body = {"استارتاپی"}/>
        </div>
    )
}