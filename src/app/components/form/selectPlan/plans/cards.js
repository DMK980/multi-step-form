"use client"
import {useContext,useEffect,useRef} from 'react'
import styles from "./cards.module.css"
import Image from 'next/image'
import arcadesvg from "../../../../../../public/images/icon-arcade.svg"
import advancedsvg from "../../../../../../public/images/icon-advanced.svg"
import prosvg from "../../../../../../public/images/icon-pro.svg"
import { store } from '@/app/state'

const Cards = ({planchoice}) => {

    const [state,dispatch] = useContext(store)
    let {plan,planpricing,selectedplan} = state
    let buttonref = useRef()

    let monthoryear_pricing = plan == "monthly" ? `${planpricing[planchoice].monthly}/mo`:`${planpricing[planchoice].yearly}/yr`
    let promotion = plan == "yearly" ? "block":"none";
    let selectedplancard = planchoice == selectedplan ? "activestyling":"nostyling";
    let svgselect = planchoice == "Arcade" ? arcadesvg : planchoice == "Advanced" ? advancedsvg :prosvg;

    useEffect(() => {
        const btn = buttonref.current;
        btn.classList.toggle(styles.selected, btn.id === selectedplan);
    }, [selectedplan]);

    const onclick = ()=>{
        dispatch({type:"CHANGEPLAN",payload:planchoice})
    }

    return (
        <button 
            type="button"
            id={planchoice}
            className={`${styles.card} ${styles[selectedplancard]}`}
            ref={buttonref}
            onClick={onclick}
            >
            <Image src={svgselect}alt={`${svgselect}`}/>
            <div>
                <h4>{planchoice}</h4>
                <p>{monthoryear_pricing}</p>
                <p className={styles.promostyle}style={{display:promotion}}>2 months free</p>
            </div>
        </button>
    )
}

export default Cards