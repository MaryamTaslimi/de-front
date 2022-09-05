import Link from "next/link";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import WhatsappSharpIcon from "@mui/icons-material/WhatsappSharp";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

const navigation = [
    {name: 'سرمایه‌گذاران', href: 'investor'},
    {name: 'شراکت استراتژیک', href: '/partnership'},
    {name: 'سرمایه‌پذیر', href: '/startup'},
    {name: 'درباره ما', href: '/about-us'},
]

const disableNavigation = [
    {name: 'فرصت‌های شغلی', href: '#'},
    {name: 'رویداد و آموزش', href: '#'},
    {name: 'بلاگ', href: '#'},
]

const socialMedia = [
    {name: 'اینستاگرام', href: 'https://www.instagram.com/vc_deic/?igshid=YmMyMTA2M2Y%3D', src: '/common/instagram.png'},
    {name: 'لینکدین', href: 'https://www.linkedin.com/company/deic-vc/', src: '/common/linkedIn.png'},
    {name: 'تلگرام', href: 'https://t.me/deic_vc', src: '/common/telegram.png'},
    {name: 'واتساپ', href: 'https://wa.me/09358776274', src: '/common/whatsapp.png'},
    {name: 'آپارات', href: 'https://www.aparat.com/deic_vc', src: '/common/aparat.png'},
]

export default function Footer() {
    return (
        <div className = {"bg-shades-10 px-4 lg:px-20 py-9 mt-10 flex flex-col gap-20"}>
            <div className = {"flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24"}>
                <div className = {"flex flex-col gap-9 lg:pr-10 lg:border-r-2 border-shades-60 w-full lg:w-1/2"}>
                    <p className = {"text-primary text-2xl font-light border-b-2 border-shades-60 lg:border-none pb-6"}>ارتباط
                        با ما</p>
                    <div className = {"flex flex-row items-center"}>
                        <LocalPhoneSharpIcon className = {"text-primary ml-4"}/>
                        <a
                            dir = {"ltr"}
                            className = {"text-base font-light text-primary"}
                            href = {"tel:02187762743"}
                        >۰۲۱ - ۸۷ ۷۶ ۲۷ ۴۳</a>
                    </div>
                    <div className = {"flex flex-row items-center"}>
                        <WhatsappSharpIcon className = {"text-primary ml-4"}/>
                        <a
                            dir = {"ltr"}
                            className = {"text-base font-light text-primary"}
                            href = {"https://wa.me/09386157570"}
                        >۰۹۳۵ ۸۷۷ ۶۲۷۴</a>
                    </div>
                    <div className = {"flex flex-row items-center"}>
                        <AlternateEmailSharpIcon className = {"text-primary ml-4"}/>
                        <div className = {"flex flex-col gap-4"}>
                            <a
                                className = {"text-base font-light text-primary underline underline-offset-4 decoration-solid"}
                                href = "mailto:info@deic.vc">info@deic.vc</a>
                            <a
                                className = {"text-base font-light text-primary underline underline-offset-4 decoration-solid"}
                                href = "mailto:Deic.vc.email@gmail.com">Deic.vc.email@gmail.com</a>
                        </div>
                    </div>
                    <div className = {"flex flex-row items-center"}>
                        <LocationOnSharpIcon className = {"text-primary ml-4"}/>
                        <p className = {"text-base font-light text-primary"}>تهران، خیابان مطهری، حد فاصل قائم‌مقام و
                            میرزای
                            شیرازی، پلاک ۳۷۰، ساختمان دنیای اقتصاد، طبقه پنجم</p>
                    </div>
                </div>
                <div>
                    <img src = {"/common/logo-type.png"} className = {"hidden xl:block max-w-xs"}/>
                </div>
                <iframe
                    src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1734.7965597631865!2d51.4166838199605!3d35.723385946331696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdonyaye%20eghtesad%20publisher!5e0!3m2!1sen!2s!4v1652739792148!5m2!1sen!2s"
                    width = "450" height = "450" style = {{border: 0}} allowFullScreen = "" loading = "lazy"
                    referrerPolicy = "no-referrer-when-downgrade"
                    className = {"w-full lg:w-1/2"}
                />
            </div>
            <div className = {"relative flex flex-col lg:flex-row items-stretch lg:items-center gap-16 lg:gap-0 justify-between"}>
                <div className={"lg:border-r-2 border-shades-60 "}>
                    <p className = {"text-primary font-light text-2xl border-b-2 border-shades-60 lg:border-none pb-6 lg:pb-10 lg:pr-10 "}>نقشه سایت</p>
                    <div className = {"flex flex-row items-end gap-24 pt-6 lg:pt-0"}>
                        <div className = {"flex flex-col gap-6 lg:pr-10 "}>
                            {navigation.map((item) => (
                                <Link key = {item.name} href = {item.href}>
                                    <a
                                        className = {"text-base font-light text-primary"}>
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                        <div className = {"flex flex-col gap-6"}>
                            {disableNavigation.map((item) => (
                                <a key = {item.name} href = {item.href}
                                   className = {"text-base font-light text-shades-40"}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className = {"flex flex-col gap-4 lg:gap-8 grow"}>
                    <p className = {"text-primary font-light text-2xl lg:text-center lg:absolute lg:top-0 lg:right-[45%] border-b-2 border-shades-60 lg:border-none pb-6"}>شبکه‌های
                        اجتماعی</p>
                    <div
                        className = {"flex flex-row justify-evenly items-center gap-6 mt-12 flex-wrap"}>
                        {socialMedia.map((item) => (
                            <a href = {item.href} key = {item.name}
                               className = {"flex flex-row gap-1 items-center justify-center text-base font-light text-shades-100"}>
                                <img src = {item.src} alt = {item.name} className = {"w-10"}/>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className={"flex items-center justify-center"}>
                    <img src = {"/common/logo-type.png"} className = {"lg:hidden w-40"}/>
                </div>
                <div className = {"flex flex-col items-center justify-center gap-4"}>
                    <div className = {"flex flex-row items-center justify-center gap-6"}>
                        <img src = {"/home/logo-p5.png"} className = {"w-32"} alt = {"salim logo"}/>
                    </div>
                    <p className = {"font-light text-xs text-shades-60 text-center"}>کلیه حقوق مادی و معنوی این سایت
                        متعلق
                        به خانه خلاق و نوآوری دنیای اقتصاد می‌باشد.</p>
                    <p className = {"font-light text-xs text-[#79A505] text-center"}>اجرا از شرکت راهکار تجارت الکترونیک
                        سلیم</p>
                </div>
            </div>
        </div>
    )
}