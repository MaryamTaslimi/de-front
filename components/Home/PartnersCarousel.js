import styles from "../../styles/Home.module.css";

export default function PartnersCarousel() {
    const items = [
        {name: "شبکه اینترنتی اکوایران", src: '/logo-p1.png'},
        {name: "انجمن سرمایه گذاران خطرپذیر", src: '/logo-p2.png'},
        {name: "پایگاه خبری دنیای بورس", src: '/logo-p3.png'},
        {name: "اتاق بازرگانی ایران", src: '/logo-p4.png'},
        {name: "خانه نوآوری و فناوری سلیم", src: '/logo-p5.png'},
        {name: "روزنامه دنیای اقتصاد", src: '/logo-p6.png'},
        {name: "سایت خبری اقتصادنیوز", src: '/logo-p7.png'},
        {name: "هفته نامه تجارت فردا", src: '/logo-p8.png', className: "w-12"},
        {name: "انتشارات دنیای اقتصاد", src: '/logo-p9.png', className: "w-12"},
    ]
    return (

        <div className = {"flex flex-col justify-center items-center z-10"}>
            <div className = {styles.gradientBg + " max-w-7xl overflow-x-scroll px-12 py-6"}>
                <div className = {"flex flex-row gap-24 whitespace-nowrap px-6"}>
                    {items.map((item) => (
                        <div key = {item.name}
                             className = {"w-24 flex flex-col justify-end items-center gap-4 inline-block"}>
                            <img src = {item.src}
                                 className = {item.className + " " + styles.logo + " opacity-25 duration-700 ease-out hover:opacity-100 hover:filter-none"}/>
                            <p className = {" text-white font-light text-base"}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

