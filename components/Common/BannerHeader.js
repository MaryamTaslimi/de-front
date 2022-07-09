import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import Link from "next/link";

export default function BannerHeader() {
    return (
        <div className = "flex flex-col xl:flex-row bg-[#DCD7D5] py-8 px-4 md:px-20 font-light gap-6 items-start xl:items-center">
            <img src = {"/common/bannerHeader.png"} className = "hidden xl:block w-28 h-auto" alt={""}/>
            <div className = {"flex flex-col gap-6 xl:gap-2 grow"}>
                <p className={"text-[#E6491E] text-2xl md:text-5xl"}>فراخوان جذب ایده و استارتاپ در حوزه معدن</p>
                <p className={"text-[#2A3470] text-lg md:text-2xl"}>همایش معدن کاری دیجیتال ۱۴۰۱ - ۲۱ الی ۲۳ شهریور</p>
            </div>
            <Link href={"/startup"}>
                <a className={"flex flex-row items-center justify-center gap-2 text-[#E6491E]"}>
                    <p className={"text-base md:text-2xl"}>اطلاعات بیشتر</p>
                    <KeyboardArrowLeftRoundedIcon/>
                </a>
            </Link>
        </div>
    )
}