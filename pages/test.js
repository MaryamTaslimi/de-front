import Script from "next/script";
import {useEffect} from "react";

export default function MyModal() {
    useEffect(()=>{
        let str = "https://www.aparat.com/embed/uU4ew?data[rnddiv]=92459803136&data[responsive]=yes&recom=none"
        console.log(str)
    }, [])
    return (
        <div id = "92459803136" className = {"max-w-lg h-auto"}>
            <Script type = "text/JavaScript"
                    src = "https://www.aparat.com/embed/uU4ew?data[rnddiv]=92459803136&data[responsive]=yes&recom=none"></Script>
        </div>
    )
}
