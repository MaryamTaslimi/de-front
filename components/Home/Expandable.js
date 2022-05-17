import styles from "/styles/Home.module.css"

export default function Expandable() {
    return (
        <div className = {"flex flex-row-reverse justify-center items-center"}>
            {/*<div className = {styles.diamondWhite + " w-[25rem] h-[15rem] transition duration-500 hover:scale-150 hover:brightness-0 hover:invert"}>*/}
            <img src = {"/diamond-accent.png"}
                 className = {styles.diamondWhite + " w-96 transition duration-500 hover:scale-150 hover:brightness-0 hover:invert"}/>
            <p className = {"self-start z-10 text-primary filter-none opacity-10 transition duration-500"}>Lorem ipsum dolor sit
                amet.</p>
            {/*</div>*/}
        </div>
    )
}
