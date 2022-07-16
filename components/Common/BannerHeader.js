import Link from "next/link";

export default function BannerHeader() {
    return (
        <div
            className = "">
            <Link href = {"/startup"}>
                <a className = {"flex flex-row items-center justify-center gap-2 text-[#E6491E]"}>
                    <img src = {"/common/bannerHeader.png"} className = "w-fill h-auto" alt = {""}/>
                </a>
            </Link>
        </div>
    )
}