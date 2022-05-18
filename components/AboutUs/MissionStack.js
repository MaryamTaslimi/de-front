import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";

export default function MissionStack({title, bodyItems}) {
    return (
        <div className = {"flex flex-col items-start gap-10 mx-6"}>
            <div className = {"flex flex-row items-center gap-4"}>
                <HexagonRoundedIcon className = {"text-2xl text-accent rotate-90"} sx = {{fontSize: "xx-large"}}/>
                    {title === 1 ?
                        <p className = {"font-light text-lg text-shades-40"}><span className = {"text-accent"}>خدمات مختلفی</span> که
                            در این راستا ارائه می‌شود
                            شامل:
                        </p>
                        :
                        <p className = {"font-light text-lg text-shades-40"}>خدمات تخصصی این مرکز برای<span
                            className = {"text-accent"}> ۳ گروه هدف</span> طراحی
                            شده است:
                        </p>
                    }
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