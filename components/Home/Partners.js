import PartnersCarousel from "./PartnersCarousel";
import Contact from "../Common/Contact";

export default function Partners() {
    return (
        <div className = {"flex flex-col xl:items-center xl:justify-center pt-20 lg:pt-24"}>
            <div className = {"px-4 lg:px-20 xl:px-0 xl:w-2/3"}>
                <div className = {"flex flex-col items-center justify-center mb-48 lg:mb-64"}>
                    <img src = {"/common/logo-type.png"} alt = {"logo"} className = {"w-48 md:w-80"}/>
                    <p className = {"font-light text-white text-2xl md:text-4xl mt-16 mb-32"}>به پشتوانه همکاران با سابقه</p>
                    <p className = {"font-light text-white text-2xl mt-16 mb-8"}>همکاران ما</p>
                    <PartnersCarousel/>
                </div>
                <Contact/>
            </div>
        </div>
    )
}