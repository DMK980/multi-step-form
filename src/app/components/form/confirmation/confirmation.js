"use client"
import styles from "./confirmation.module.css"
import Image from "next/image"
import confirmationsvg from "../../../../../public/images/icon-thank-you.svg"
import { store } from "@/app/state"
import { useContext } from "react"
import formcss from "../form.module.css"


function Confirmation(){
    const [state,dispatch] = useContext(store)
    let{activelink} = state

    let visible = activelink === "confirmation" ? "main":"mainhidden"
    return(
        <section className={`${styles[visible]} ${formcss.mainContainer}`}>
            <Image alt='Check mark'src={confirmationsvg}/>
            <h1 className={`${formcss.header}`}>Thank you!</h1>
            <p className={`${formcss.subtext}`}>Thanks for confirming your subscription! we hope you have fun using our platform.
                if you ever need support,please feel free to email us at
            </p>
        </section>
    )
}

export default Confirmation
