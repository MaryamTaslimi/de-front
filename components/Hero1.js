import Image from "next/image"
export default function Hero1() {
    return (
        <div className = "flex flex-row justify-start">
            <Image
                src = "/lamp-off.png"
                width={60}
                height={60}
                alt = "lamp-off"/>
        </div>
    )
}