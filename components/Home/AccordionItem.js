import {Disclosure, Transition} from '@headlessui/react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import HexagonRoundedIcon from '@mui/icons-material/HexagonRounded';
import {Fragment} from "react";

export default function AccordionItem({question, answer}) {
    return (
        <div className = "w-full pt-8 md:pt-16">
            <div className = "rounded-sm bg-white">
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className = {"w-full flex flex-row justify-between items-center px-4 py-2 text-right text-lg md:text-xl font-thin transition-all duration-500 transform " + (open ? "bg-shades-20 text-primary hover:bg-primary hover:text-white" : "bg-primary text-white hover:bg-shades-20 hover:text-primary")}>
                                <HexagonRoundedIcon className={"rotate-90"}/>
                                <span className={"grow text-right pr-2"}>{question}</span>
                                <ExpandMoreRoundedIcon
                                    className = {"h-5 w-5 transition duration-500 " + (open ? "rotate-180 transform" : "")
                                    }
                                />
                            </Disclosure.Button>

                            <Transition
                                as = {Fragment}
                                show = {open}
                                enter = "transform transition duration-500"
                                enterFrom = "opacity-0"
                                enterTo = "opacity-100"
                                leave = "transform duration-500 transition ease-in-out"
                                leaveFrom = "opacity-100 "
                                leaveTo = "opacity-0"
                            >
                                <Disclosure.Panel
                                    className = "px-4 pt-4 pb-2 text-base text-white font-thin transition-all duration-500 bg-primary">
                                    {answer}
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
