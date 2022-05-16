import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

export default function VerticalCarousel() {
    const items = [
        {name: 'تسهیل فرایند سرمایه‌گذاری'},
        {name: 'تسهیل فرایند سرمایه‌پذیری'},
        {name: 'مشاوره سرمایه‌گذاری و کسب‌وکار\u00A0'},
        {name: 'شراکت استراتژیک'},
        {name: 'رویداد و آموزش'},

    ]
    return (
        <div className={"px-3"}>
            <Carousel showIndicators = {false} infiniteLoop = {true} interval = {1500} showArrows = {false}
                      showThumbs = {false} autoPlay = {true} axis = {'vertical'} showStatus = {false}
                      showStatusText = {false} dynamicHeight={true} stopOnHover={true} width={"fit-content"}>
                {items.map((item) => (
                    <div key = {item.name} className={"py-2"}>
                        <p
                           className = {"text-4xl font-light text-secondary"}>
                            {item.name}
                        </p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
