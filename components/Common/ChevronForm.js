import Chevron from "./Chevron";

export default function ChevronForm() {
    return (
        <div className = {"flex flex-col justify-center items-center gap-4 mt-32"}>
            <a href = {"#form"}>
                <p className = {"text-shades-10 font-light text-lg mb-4"}>فرم همکاری</p>
                <Chevron/>
                <Chevron/>
            </a>
        </div>
    )
}