import InfoItem from "./InfoItem";
import CountUpItem from "./CountUpItem";

export default function InfoBox() {
    return (
        <div className = {"flex flex-row items-center justify-around mt-56"}>
            <InfoItem prefix = {"بیش از"} number = {20} suffix = {"سال سابقه"} body = {"تجربه کاری"}/>
            <InfoItem prefix = {""} number = {3} suffix = {""} body = {"مرکز اداری تجاری بین المللی"}/>
            <InfoItem prefix = {"+"} number = {5} suffix = {"میلیارد دلار"} body = {"دارایی های تحت مدیریت"}/>
        </div>
    )
}