import Carousel from "react-multi-carousel";
import {Image} from "semantic-ui-react";

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        paritialVisibilityGutter: 30
    }
};

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

const Simple = () => {
    return (
        <Carousel
            partialVisbile
            responsive = {responsive}
            ltr
        >
            {items.map((item) => (
                <div key = {item.name}
                     className = {"w-fit flex flex-col justify-end items-center gap-4 inline-block px-4"}>
                    <img src = {item.src}
                         className = {item.className + " md:grayscale md:opacity-25 duration-700 ease-out hover:opacity-100 hover:filter-none"}
                         alt = {item.name}/>
                    <p className = {" text-white font-light text-base"}>{item.name}</p>
                </div>
            ))}
        </Carousel>
    );
};

export default Simple;
