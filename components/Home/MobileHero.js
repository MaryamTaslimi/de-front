import Header from "../Common/Header";


export default function MobileHero() {
    return (
        <div className = {"lg:hidden"}>
            <div className = {" flex flex-row items-center justify-between pb-16"}>
                <p className = {"text-accent font-light text-2xl grow"}>آینده،<br/>
                    از اینجا شروع می‌شود...</p>
                <img src = {"/home/lamp-on.png"} className = {"h-16 w-auto"}/>
            </div>
        </div>
    )
}