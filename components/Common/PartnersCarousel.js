import styles from "../../styles/Home.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PartnersCarousel({items}) {


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
                    infinite = {true}
                    autoPlay = {true}
                    arrows = {false}
                    containerClass = "flex flex-row gap-20 "
                    sliderClass = {"items-end"}
                    itemClass = {"flex justify-center"}
                >
                    {items.map((item) => (
                        <a key = {item.name}
                           href = {item.url}
                           target={"_blank"}
                           rel="noreferrer"
                           className = {"w-fit flex flex-col justify-end items-center gap-4 "}>
                            <img src = {item.src}
                                 className = {item.className + " md:grayscale md:opacity-25 duration-700 ease-out hover:opacity-100 hover:filter-none"}
                                 alt = {item.name}/>
                            <p className = {" text-white font-light text-base text-center"}>{item.name}</p>
                        </a>
                    ))}
                </Carousel>
            </div>
        </div>

    );
}
