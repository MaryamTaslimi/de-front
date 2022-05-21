import PartnersCarousel from "./PartnersCarousel";
import Contact from "../Common/Contact";

export default function Partners() {
    return (
        <div className = {"flex items-center justify-center"}>
            <div className = {"lg:w-2/3"}>
                <div className = {"flex flex-col items-center justify-center mb-64"}>
                    <img src = {"/common/logo-text.png"} alt = {"logo"} className = {"max-w-xs"}/>
                    <p className = {"font-light text-white text-2xl md:text-4xl mt-16 mb-32"}>به پشتوانه همکاران با سابقه</p>
                    <p className = {"font-light text-white text-2xl mt-16 mb-8"}>همکاران ما</p>
                    <PartnersCarousel/>
                </div>
                <Contact/>
            </div>
        </div>
    )
}