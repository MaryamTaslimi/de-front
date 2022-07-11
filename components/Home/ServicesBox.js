import VerticalCarousel from "./VerticalCarousel";

export default function ServicesBox() {
    return (
        <div>
        <div className = {"hidden lg:flex flex-col mt-56"}>
            <div className = {"flex flex-row items-start"}>
                <img src = {"/home/hexagonal-secondary.png"} className={"w-72"} alt={"hexagonal"}/>
                <p className = {"text-3xl xl:text-5xl font-light text-white -mr-56 mt-2 xl:mt-0"}>چه خدماتی ارائه می‌دهیم</p>
            </div>
            <div className = {"flex flex-row items-center mr-80 -mt-8"}>
                <p className = {"text-2xl xl:text-4xl font-light text-white"}>ما در زمینه</p>
                <VerticalCarousel/>
                <p className = {"text-2xl xl:text-4xl font-light text-white"}>فعالیت می‌کنیم.</p>
            </div>
        </div>


            <div className={"lg:hidden flex flex-col mt-16"}>
                <div className={"flex flex-row gap-6"}>
                    <img src = {"/home/hexagonal-secondary-mobile.png"} className={"w-12"} alt={"hexagonal"}/>
                    <p className = {"text-2xl xl:text-4xl font-light text-white mt-2 md:mt-1"}>چه خدماتی ارائه می‌دهیم</p>
                </div>
                <VerticalCarousel/>
            </div>
        </div>
    )
}