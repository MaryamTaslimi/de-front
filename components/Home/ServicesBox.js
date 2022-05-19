import VerticalCarousel from "./VerticalCarousel";

export default function ServicesBox() {
    return (
        <div className = {"flex flex-col mt-56"}>
            <div className = {"flex flex-row items-start"}>
                <img src = {"/home/hexagonal-secondary.png"} className={"w-72"} alt={"hexagonal"}/>
                <p className = {"text-5xl font-light text-white -mr-56"}>چه خدماتی ارائه می‌دهیم</p>
            </div>
            <div className = {"flex flex-row items-center mr-80 -mt-8"}>
                <p className = {"text-4xl font-light text-white"}>ما به شما در</p>
                <VerticalCarousel/>
                <p className = {"text-4xl font-light text-white"}>کمک می‌کنیم.</p>

            </div>
        </div>
    )
}