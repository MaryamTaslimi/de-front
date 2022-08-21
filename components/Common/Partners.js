import PartnersCarousel from "./PartnersCarousel";
import Contact from "./Contact";

export default function Partners({type = 1, items}) {
    return (
        <div className = {"flex flex-col xl:items-center xl:justify-center pt-20 lg:pt-24"}>
            <div className = {"px-4 lg:px-20 xl:px-0 xl:w-2/3"}>
                <div className = {"flex flex-col items-center justify-center " + (type === 1 ? "mb-48 lg:mb-64" : "mb-18 lg:mb-20")}>
                    {type === 1 && <img src = {"/common/logo-type.png"} alt = {"logo"} className = {"w-48 md:w-80"}/>}
                    {type === 1 && <p className = {"font-light text-white text-2xl md:text-4xl my-16"}>به پشتوانه همکاران با سابقه</p>}

                    <p className = {"font-light text-white text-2xl mt-16 mb-8"}>{type === 1 ? "همکاران ما" : "شریکان استراتژیک خانه خلاق و نوآوری دنیای اقتصاد"}</p>
                    <PartnersCarousel items={items}/>
                </div>
                {/*<Contact/>*/}
            </div>
        </div>
    )
}