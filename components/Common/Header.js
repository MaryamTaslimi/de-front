import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {Transition} from '@headlessui/react'
import {useState} from "react";

const navigation = [
    {name: 'سرمایه‌گذاران', href: 'investor'},
    {name: 'شراکت استراتژیک', href: '/partnership'},
    {name: 'سرمایه‌پذیر', href: '/startup'},
    {name: 'درباره ما', href: '/about-us'},
]

export default function Header({transparent}) {
    const [hamburger, setHamburger] = useState(false);
    return (
        <header className = {"py-4 md:py-12 lg:py-4 px-4 md:px-20" + (transparent ? "" : "bg-white")}>
            <nav className = "hidden lg:block" aria-label = "Top">
                <div
                    className = "w-full flex items-center justify-between">
                    <div className = "flex space-x-20 items-center z-10">
                        <Link href = "/">
                            <a className = "ml-10">
                                <span className = "sr-only">مرکز فناوری دنیای اقتصاد</span>
                                <img
                                    className = "h-12 w-auto"
                                    src = "/common/logo-type.png"
                                    alt = ""
                                />
                            </a>
                        </Link>

                        {navigation.map((link) => (
                            <Link key = {link.name} href = {link.href}>
                                <a
                                    className = {"text-base font-light" + (transparent ? " text-white" : " text-primary")}>
                                    {link.name}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className = "z-10">
                        <a
                            href = "#form"
                            className = "z-10 inline-block bg-accent py-2 px-10 border border-transparent rounded-sm text-base font-light text-black"
                        >
                            همکاری با ما </a>
                    </div>
                </div>
            </nav>

            <div className = {"lg:hidden"}>
                <div className = {"flex flex-row items-center justify-between"}>
                    <div className = {"flex flex-row items-center align-start"}>
                        <Link href = "/">
                            <a className = "ml-2 sm:ml-8">
                                <span className = "sr-only">مرکز فناوری دنیای اقتصاد</span>
                                <img
                                    className = "h-14 w-auto"
                                    src = "/common/logo.png"
                                    alt = ""
                                />
                            </a>
                        </Link>
                        {!hamburger && <MenuIcon className = {"text-white"} sx = {{fontSize: 35}}
                                                 onClick = {() => {
                                                     setHamburger(true);
                                                 }}/>}
                    </div>

                    {!hamburger ? <div className = "z-10">
                        <a
                            href = "#formMobile"
                            className = "z-10 inline-block bg-accent py-1.5 px-10 border border-transparent rounded-sm text-base font-light text-black"
                        >
                            همکاری با ما </a>
                    </div> : <CloseIcon className = {"text-white"} sx = {{fontSize: 35}}
                                        onClick = {() => {
                                            setHamburger(false);
                                        }}/>}
                </div>

                <Transition
                    show = {hamburger}
                    enter = "transition-opacity duration-200"
                    enterFrom = "opacity-0"
                    enterTo = "opacity-100"
                    leave = "transition-opacity duration-250"
                    leaveFrom = "opacity-100"
                    leaveTo = "opacity-0"
                >
                    <nav className = {"mt-4"}>
                        <div
                            className = {"flex flex-col justify-center items-center gap-8 py-12 border-y-2 border-shades-60"}>
                            {navigation.map((link) => (
                                <Link key = {link.name} href = {link.href}>
                                    <a
                                        className = {"text-base font-light" + (transparent ? " text-white" : " text-primary")}>
                                        {link.name}
                                    </a>
                                </Link>
                            ))}
                            <div className = "z-10">
                                <a
                                    href = "#formMobile"
                                    className = "z-10 inline-block bg-accent py-1.5 px-10 border border-transparent rounded-sm text-base font-light text-black hover:bg-opacity-75"
                                >
                                    همکاری با ما </a>
                            </div>
                        </div>
                    </nav>
                </Transition>

            </div>

        </header>
    )
}
