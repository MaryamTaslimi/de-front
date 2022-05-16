import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import WhatsappSharpIcon from '@mui/icons-material/WhatsappSharp';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

const socialMedia = [
    {name: 'اینستاگرام', href: '#', src: '/instagram.png'},
    {name: 'لینکدین', href: 'https://www.linkedin.com/in/deic', src: '/linkedIn.png'},
]


export default function Contact() {
    return (
        <div className = {"flex flex-row gap-8 border-r border-shades-60 justify-between"}>

            <div className = {"flex flex-col gap-9 pr-10"}>
                <p className = {"text-white text-2xl font-light"}>ارتباط با ما</p>
                <div className = {"flex flex-row items-center"}>
                    <LocalPhoneSharpIcon className = {"text-white ml-4"}/>
                    <p dir = {"ltr"} className = {"text-base font-light text-white"}>۰۲۱ - ۸۷۷۶۲۷۴۳</p>
                </div>
                <div className = {"flex flex-row items-center"}>
                    <WhatsappSharpIcon className = {"text-white ml-4"}/>
                    <p dir = {"ltr"} className = {"text-base font-light text-white"}>۰۹۳۸ ۶۱۵۷ ۵۷۰۳</p>
                </div>
                <div className = {"flex flex-row items-center"}>
                    <AlternateEmailSharpIcon className = {"text-white ml-4"}/>
                    <div className = {"flex flex-col gap-4"}>
                        <a dir = {""}
                           className = {"text-base font-light text-white underline underline-offset-4 decoration-solid"}
                           href = "mailto:info@de.com">info@de.com</a>
                        <a dir = {""}
                           className = {"text-base font-light text-white underline underline-offset-4 decoration-solid"}
                           href = "mailto:Deic.vc.email@gmail.com">Deic.vc.email@gmail.com</a>
                    </div>
                </div>
                <div className = {"flex flex-row items-center"}>
                    <LocationOnSharpIcon className = {"text-white ml-4"}/>
                    <p className = {"text-base font-light text-white"}>تهران، خیابان مطهری، حد فاصل قائم‌مقام و میرزای
                        شیرازی، پلاک ۲۹، ساختمان دنیای اقتصاد، طبقه پنجم</p>
                </div>
                <div
                    className = {"flex flex-row justify-center items-center gap-6 justify-self-center place-self-center"}>
                    {socialMedia.map((item) => (
                        <div key = {item.name} className = {"flex flex-col gap-2"}>
                            <img src = {item.src} alt = {item.name} className = {"w-12"}/>
                            <a href = {item.href}
                               className = {"text-base font-light text-[#6B6B6B]"}>
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>

            </div>

            <iframe
                src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1734.7965597631865!2d51.4166838199605!3d35.723385946331696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdonyaye%20eghtesad%20publisher!5e0!3m2!1sen!2s!4v1652739792148!5m2!1sen!2s"
                width = "450" height = "450" style = {{border: 0}} allowFullScreen = "" loading = "lazy"
                referrerPolicy = "no-referrer-when-downgrade"/>
        </div>
    )
}