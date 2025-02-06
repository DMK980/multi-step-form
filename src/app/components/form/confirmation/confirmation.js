"use client"
import styles from "./confirmation.module.css"
import Image from "next/image"
import confirmationsvg from "../../../../../public/images/icon-thank-you.svg"
import { store } from "@/app/state"
import { useContext } from "react"
import globalformcss from "../globalform.module.css"


function Confirmation(){
    const [state,dispatch] = useContext(store)
    let{activelink} = state

    let visible = activelink === "confirmation" ? "main":"mainhidden"
    return(
        <section className={`${styles[visible]} ${globalformcss.mainContainer}`}>
            <Image alt='Check mark'src={confirmationsvg}/>
            <h1 className={`${globalformcss.header}`}>Thank you!</h1>
            <p className={`${globalformcss.subtext}`}>Thanks for confirming your subscription! we hope you have fun using our platform.
                if you ever need support,please feel free to email us at
            </p>
        </section>
    )
}

export default Confirmation
