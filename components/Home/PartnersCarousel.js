import styles from "../../styles/Home.module.css";

export default function PartnersCarousel() {
    const items = [
        {name: "شبکه اینترنتی اکوایران", src: '/home/logo-p1.png', className: "w-20 md:w-24"},
        {name: "انجمن سرمایه گذاران خطرپذیر", src: '/home/logo-p2.png', className: "w-20 md:w-24"},
        {name: "پایگاه خبری دنیای بورس", src: '/home/logo-p3.png'},
        {name: "اتاق بازرگانی ایران", src: '/home/logo-p4.png'},
        {name: "خانه نوآوری و فناوری سلیم", src: '/home/logo-p5.png'},
        {name: "روزنامه دنیای اقتصاد", src: '/home/logo-p6.png', className: "max-w-[165%]"},
        {name: "سایت خبری اقتصادنیوز", src: '/home/logo-p7.png'},
        {name: "هفته نامه تجارت فردا", src: '/home/logo-p8.png', className: "w-12"},
        {name: "انتشارات دنیای اقتصاد", src: '/home/logo-p9.png', className: "w-12"},
    ]
    return (

        <div className = {styles.gradientBg + " " + styles.hiddenXScrollBar + " flex flex-col justify-center items-center z-10 w-full overflow-x-scroll"}>
            <div
                className = {" py-6 w-full"}>
                <div className = {"flex flex-row gap-20 whitespace-nowrap"}>
                    {items.map((item) => (
                        <div key = {item.name}
                             className = {"w-fit flex flex-col justify-end items-center gap-4 inline-block px-4"}>
                            <img src = {item.src}
                                 className = {item.className + " md:grayscale md:opacity-25 duration-700 ease-out hover:opacity-100 hover:filter-none"}/>
                            <p className = {" text-white font-light text-base"}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
