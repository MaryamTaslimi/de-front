import CountUpItem from "./CountUpItem";

export default function InfoItem({prefix, number, suffix, body}) {
    return (
        <div className={"flex flex-col justify-center items-center gap-4 lg:gap-6"}>
            <div className={"text-2xl lg:text-3xl xl:text-5xl font-light text-white"}>
                <CountUpItem prefix={prefix} number={number} suffix={suffix}/>
            </div>
            <p className={"text-lg lg:text-xl xl:text-2xl font-light text-shades-60"}>{body}</p>
        </div>
    )
}