import Team from "../Common/Team";
import Contact from "../Common/Contact";
import Gap from "./Gap";
import PartnersCarousel from "../Home/PartnersCarousel";

export default function Bottom() {
    return (
    <div className = {"flex items-center justify-center"}>
        <div className = {"max-w-7xl"}>
            <Team/>
            <Gap/>
            <Contact/>
        </div>
    </div>
    )
}