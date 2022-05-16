import CountUpItem from "./CountUpItem";

export default function InfoItem({prefix, number, suffix, body}) {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <div className={"text-5xl font-light text-white"}>
                <CountUpItem prefix={prefix} number={number} suffix={suffix}/>
            </div>
            <p className={"text-2xl font-light text-shades-60 mt-6"}>{body}</p>
        </div>
    )
}