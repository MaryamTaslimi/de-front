import Link from "next/link";

const navigation = [
    {name: 'سرمایه‌گذاران', href: 'investor'},
    {name: 'شراکت استراتژیک', href: '/partnership'},
    {name: 'سرمایه‌پذیر', href: '/startup'},
    {name: 'درباره ما', href: '/about-us'},
]

const disableNavigation = [
    {name: 'رویداد و آموزش', href: '#'},
    {name: 'بلاگ', href: '#'},
]

const socialMedia = [
    {name: 'اینستاگرام', href: '#', src: '/common/instagram.png'},
    {name: 'لینکدین', href: 'https://www.linkedin.com/in/deic', src: '/common/linkedIn.png'},
]

export default function Footer() {
    return (
        <div className = {"bg-shades-10 grid grid-cols-4 px-24 py-9"}>
            <div className = {"flex flex-col gap-6 ml-20"}>
                {navigation.map((item) => (
                    <Link key = {item.name} href = {item.href}>
                        <a
                            className = {"text-base font-light text-primary"}>
                            {item.name}
                        </a>
                    </Link>
                ))}
            </div>
            <div className = {"flex flex-col justify-end gap-6"}>
                {disableNavigation.map((item) => (
                    <a key = {item.name} href = {item.href}
                       className = {"text-base font-light text-shades-40"}>
                        {item.name}
                    </a>
                ))}
            </div>
            <div className = {"flex flex-row justify-center items-center gap-6 justify-self-start place-self-center"}>
                {socialMedia.map((item) => (
                    <div key = {item.name} className = {"flex flex-col gap-2"}>
                        <a href = {item.href}
                           className = {"text-base font-light text-[#6B6B6B]"}>
                            <img src = {item.src} alt = {item.name} className = {"w-12"}/>
                            {item.name}
                        </a>
                    </div>
                ))}
            </div>
            <div className = {"flex flex-col items-center justify-center gap-4"}>
                <div className = {"flex flex-row items-center justify-center gap-6"}>
                    <img src = {"/common/logo-text.png"} className = {"w-32"} alt = {"logo"}/>
                    <img src = {"/home/logo-p5.png"} className = {"w-32"} alt = {"salim logo"}/>
                </div>
                <p className = {"font-light text-xs text-shades-60 text-center"}>کلیه حقوق مادی و معنوی این سایت متعلق
                    به مرکز
                    نوآوری و کسب و کار دیجیتال دنیای اقتصاد می‌باشد.</p>
                <p className = {"font-light text-xs text-[#79A505] text-center"}>اجرا از شرکت راهکار تجارت الکترونیک
                    سلیم</p>
            </div>

        </div>
    )
}