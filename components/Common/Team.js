import Contact from "./Contact";
import Image from "next/image"

const team = [
    {name: "غلام‌حسین محمدی", position: "رئیس مرکز", image: "/about/qolam.png", linkedIn: ""},
    {
        name: "رسول قنبری",
        position: "مدیر سرمایه‌گذاری",
        image: "/about/rasul.png",
        linkedIn: "https://www.linkedin.com/in/rasoul-qanbari/"
    },
    {
        name: "نوشین ذاکری",
        position: "مدیر محتوا",
        image: "/about/nooshin.png",
        linkedIn: "https://www.linkedin.com/in/noushin-zakeri/"
    },
    {
        name: "محمد حافط حکمی",
        position: "رئیس شورای سیاست گذاری",
        image: "/about/hafez.png",
        linkedIn: "https://www.linkedin.com/in/mohammad-hafez-hakami-a4a4461a2/"
    },
    {
        name: "محسن جعفری مقدم",
        position: "مدیر اجرایی",
        image: "/about/mohsen.png",
        linkedIn: "https://www.linkedin.com/in/mohsen-jaafari-moghadam-579a31244/"
    },
    {
        name: "مریم آذرباد",
        position: "گرافیست",
        image: "/about/mary.png",
        linkedIn: "https://www.linkedin.com/in/maryam-azarbad-4948a5248/"
    },
]

export default function Team() {
    return (
        <div className = {"flex flex-col"}>
            <div
                className = {"flex flex-row items-center justify-start gap-8 border-b-2 border-shades-60 pb-6 mb-8"}>
                <p className = {"text-justify font-light text-shades-10 text-2xl mr-8"}>تیم ما</p>
            </div>
            <div
                className = {"grid grid-rows-2 grid-cols-2 place-content-center gap-y-12 md:flex md:flex-row md:justify-evenly md:gap-12"}>
                {
                    team.map((member) => (
                        <div key = {member.name}
                             className = {"flex flex-col gap-6 justify-between items-center"}>
                            <img className={"max-w-[6rem] "} src = {member.image} alt = {member.name}/>
                            <p className = {"font-light text-shades-40 text-base text-center"}>{member.position}</p>
                            <p className = {"font-light text-shades-10 text-base text-center"}>{member.name}</p>
                            <a href = {member.linkedIn}
                               className = {"text-base font-light text-[#6B6B6B]"}>
                                <img src = {"/common/linkedIn.png"} alt = {"icon"} className = {"w-12"}/>
                            </a>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}