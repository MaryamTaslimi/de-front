import Team from "../Common/Team";
import Contact from "../Common/Contact";
import Gap from "../Common/Gap";

export default function Bottom() {
    return (
    <div className = {"flex items-center justify-center"}>
        <div className = {"w-2/3"}>
            <Team/>
            <Gap/>
            <Contact/>
        </div>
    </div>
    )
}