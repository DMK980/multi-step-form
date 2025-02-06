"use client"
import styles from "./selectplan.module.css"
import { store } from "@/app/state"
import { useContext } from "react"
import Switch from "@mui/material/Switch"
import Cards from "./plans/cards"
import formcss from "../form.module.css"


function SelectPlan(){

    const [state,dispatch] = useContext(store)
    let{activelink,plan} = state
    let visible = activelink === "select your plan" ? "fieldset" : "fieldsethidden";
    let monclassname = plan == "monthly" ? `${styles.month} ${styles.planselectmonyr}`:`${styles.month}`;
    let yrclassname = plan == "yearly" ? `${styles.year} ${styles.planselectmonyr}`:`${styles.year}`;
    const onchange = (e)=>{
        dispatch({type:"SWITCHPLAN"})
    }
    return (
        <fieldset className={`${styles[visible]} ${formcss.mainContainer}`}>
            <h1 className={`${formcss.header}`}>Select your plan</h1>
            <p className={`${styles.description} ${formcss.subtext}`}>You have the option of monthly or yearly billing.</p>
            <section>
                <Cards planchoice="Arcade"/>
                <Cards planchoice="Advanced"/>
                <Cards planchoice="Pro"/> 
            </section>
            <div className={styles.monyr}>
                <span id="monthly"className={monclassname}>Monthly</span>
                <Switch 
                    className={styles.switchstyling}
                    onChange={onchange}
                    />
                <span id="yearly"className={yrclassname}>Yearly</span>
            </div>
        </fieldset>
    )
}

export default SelectPlan