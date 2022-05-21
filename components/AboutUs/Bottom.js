import Team from "../Common/Team";
import Contact from "../Common/Contact";
import Gap from "../Common/Gap";
import ChevronForm from "../Common/ChevronForm";

export default function Bottom() {
    return (
    <div className = {"flex flex-col lg:items-center lg:justify-center"}>
        <div className = {"lg:w-2/3"}>
            <Team/>
            <Gap/>
            <Contact/>
            <div  className={"md:hidden"}>
                <ChevronForm/>
            </div>
        </div>
    </div>
    )
}