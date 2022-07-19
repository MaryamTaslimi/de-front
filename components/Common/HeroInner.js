import styles from "../../styles/Home.module.css";
import Header from "./Header";
import Chevron from "./Chevron";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useRef} from "react";
import BannerHeader from "./BannerHeader";
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import Script from "next/script";

export default function HeroInner({number, title, body, url}) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const colorClass = useRef(styles.heroContainer);
    switch (number) {
        case 1:
            colorClass.current = styles.heroContainer1;
            break;
        case 2:
            colorClass.current = styles.heroContainer2;
            break;
        case 3:
            colorClass.current = styles.heroContainer3;
            break;
    }

    return (
        <div className = {"flex flex-col"}>
            <BannerHeader/>
            <div className = {"lg:hidden"}>
                <Header transparent = {true}/>
            </div>
            <div
                className = {colorClass.current + " min-h-[45vh] md:min-h-[75vh] flex flex-col justify-end lg:justify-start"}>
                <div className = {"hidden lg:block"}>
                    <Header transparent = {true}/>
                </div>

                <div className = "flex flex-col gap-16 py-6 md:py-12 px-4 md:px-20">
                    <p className = {"hidden md:block font-light text-4xl lg:text-6xl text-shades-10"}>{title}</p>
                    <p className = {"font-light text-lg lg:text-2xl text-shades-10 text-center md:text-right"}>{body}</p>
                    <div className = {"flex flex-row items-center gap-6"} onClick = {openModal}>
                        <p className = {"font-light text-lg lg:text-2xl text-accent text-center md:text-right"}>راجع
                            به همکاری با ما بیشتر بدانید</p>
                        <img src = {"/common/play-video.png"} alt = {""} className = {"w-12 h-auto"}/>
                        <Transition appear show = {isOpen} as = {Fragment}>
                            <Dialog as = "div" className = "relative z-10" onClose = {closeModal}>
                                <Transition.Child
                                    as = {Fragment}
                                    enter = "ease-out duration-300"
                                    enterFrom = "opacity-0"
                                    enterTo = "opacity-100"
                                    leave = "ease-in duration-200"
                                    leaveFrom = "opacity-100"
                                    leaveTo = "opacity-0"
                                >
                                    <div className = "fixed inset-0 bg-primary backdrop-blur bg-opacity-50"/>
                                </Transition.Child>

                                <div className = "fixed inset-0 overflow-y-auto">
                                    <div className = "flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as = {Fragment}
                                            enter = "ease-out duration-300"
                                            enterFrom = "opacity-0 scale-95"
                                            enterTo = "opacity-100 scale-100"
                                            leave = "ease-in duration-200"
                                            leaveFrom = "opacity-100 scale-100"
                                            leaveTo = "opacity-0 scale-95"
                                        >
                                            <Dialog.Panel
                                                className = "w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all">
                                                <CloseRoundedIcon onClick = {closeModal} className={"mb-4 cursor-pointer"}/>

                                                <div id = {url.split("[rnddiv]=")[1].split("&")[0]} >
                                                    <Script type = "text/JavaScript"
                                                            src = {url}></Script>
                                                </div>

                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
            </div>
            <div className = {"hidden lg:block"}>
                <Chevron/>
            </div>
        </div>
    )
}