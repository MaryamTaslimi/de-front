import Team from "../Common/Team";
import Gap from "../Common/Gap";
import Call from "./Call";
import Contact from "../Common/Contact";

export default function Bottom() {
    return (
    <div className = {"flex flex-col lg:items-center lg:justify-center"}>
        <div className = {"xl:w-2/3"}>
            <Call/>
            <Gap/>
            {/*<Team/>*/}
        </div>
    </div>
    )
}