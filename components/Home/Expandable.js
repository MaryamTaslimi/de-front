import styles from "/styles/Home.module.css"

export default function Expandable() {
    return (
        <div className = {"flex flex-row-reverse justify-center items-center transition duration-500"}>
            <div className = {styles.diamondWhite + " w-[25rem] h-[15rem] flex flex-row-reverse justify-center items-center z-10"}>
                <p className = {"z-20 mb-2 transition duration-500 text-shades-100 text-light text-2xl"}>مشاوره</p>
            </div>
            <div
                className = {"right-60 -top-20 opacity-20 px-8 w-96 flex flex-col justify-center items-center self-start text-primary z-20 filter-none opacity-0 transition duration-700"}>
                <p className = {"mb-2 text-shades-80 text-light text-lg"}>مشاوره</p>
                <p className = {"border-t-2 border-shades-60 text-center text-2xl pt-4"}>
                    تحلیل روند صنایع، کسب و کارها و ارائه مشاوره تخصصی به منظور پیش بینی اقتصادی
                </p>
            </div>
        </div>
    )
}

{/*<img src = {"/diamond-accent.png"}*/}
{/*     className = {"w-96 z-10 hover:scale-150 transition duration-500 hover:brightness-0 hover:invert"}/>*/}