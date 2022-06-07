import styles from "../../styles/Home.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PartnersCarousel() {

    const items = [
        {name: "شبکه اینترنتی اکوایران", src: '/home/logo-p1.png', className: "w-20 md:w-24"},
        {name: "انجمن سرمایه گذاران خطرپذیر", src: '/home/logo-p2.png', className: "w-20 md:w-24"},
        {name: "پایگاه خبری دنیای بورس", src: '/home/logo-p3.png', className: "w-20 md:w-24"},
        {name: "اتاق بازرگانی ایران", src: '/home/logo-p4.png', className: "w-20 md:w-24"},
        {name: "خانه نوآوری و فناوری سلیم", src: '/home/logo-p5.png', className: "w-20 md:w-24"},
        {name: "روزنامه دنیای اقتصاد", src: '/home/logo-p6.png', className: "w-40 md:w-44"},
        {name: "سایت خبری اقتصادنیوز", src: '/home/logo-p7.png', className: "w-20 md:w-24"},
        {name: "هفته نامه تجارت فردا", src: '/home/logo-p8.png', className: "w-12"},
        {name: "انتشارات دنیای اقتصاد", src: '/home/logo-p9.png', className: "w-12"},
    ]

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5,
        },
        tablet: {
            breakpoint: {max: 1024, min: 560},
            items: 3,
        },
        mobile: {
            breakpoint: {max: 560, min: 0},
            items: 2,
        }
    };


    return (

        <div className = {"flex flex-col w-full "}>
            <div dir = {"ltr"} className = {styles.gradientBg + " py-6"}>
                <Carousel
                    partialVisbile
                    responsive = {responsive}
                    infinite={true}
                    autoPlay={true}
                    arrows={false}
                    containerClass="flex flex-row gap-20 "
                    sliderClass={"items-end"}
                    itemClass={"flex justify-center"}
                >
                    {items.map((item) => (
                        <div key = {item.name}
                             className = {"w-fit flex flex-col justify-end items-center gap-4 "}>
                            <img src = {item.src}
                                 className = {item.className + " md:grayscale md:opacity-25 duration-700 ease-out hover:opacity-100 hover:filter-none"}
                                 alt = {item.name}/>
                            <p className = {" text-white font-light text-base text-center"}>{item.name}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>

    );
}
