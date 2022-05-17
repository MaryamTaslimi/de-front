import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";

export default function MissionStack({title, bodyItems}) {
    return (
        <div className = {"flex flex-col items-start gap-10"}>
            <div className = {"flex flex-row items-center gap-4"}>
                <HexagonRoundedIcon className = {"text-2xl text-accent rotate-90"} sx = {{fontSize: "xx-large"}}/>
                <p className = {"font-light text-2xl text-shades-10"}>
                    {title}
                </p>
            </div>

            {
                bodyItems.map(item => (
                    <div key={item} className = {"flex flex-row items-center gap-4 mr-1.5"}>
                        <HexagonRoundedIcon className = {"text-accent-50 rotate-90"} sx = {{fontSize: "large"}}/>
                        <div className = {"font-light text-lg text-shades-40"}>
                            {item}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}