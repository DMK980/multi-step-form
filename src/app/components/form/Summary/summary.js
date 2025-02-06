"use client"
import {useContext} from 'react'
import styles from "./summary.module.css"
import { store } from '../../../state'
import formcss from "../form.module.css"

const Summary = () => {

    const [state,dispatch] = useContext(store)
    let {activelink,selectedplan,plan,addons,planpricing} = state

    let visible = activelink == "summary" ? "fieldset": "fieldsethidden";
    let monoryr = plan == "monthly" ? "/mo" : "/yr";
 
    const getPrice = (type) => Number(planpricing[type][plan].split("$")[1] || 0);
    
    const total = getPrice(selectedplan) + 
        ['onlineservice', 'largerstorage', 'customizableprofile']
            .reduce((sum, addon) => sum + (addons[addon] ? getPrice(addon) : 0), 0);

    const onclick = ()=>{
        dispatch({type:"ACTIVELINK",payload:"select your plan"})
    }
    
    
    return (
        <fieldset className={` ${styles[visible]} ${formcss.mainContainer}`}>
            <h1 className={`${formcss.header}`}>Finishing up</h1>
            <p className={`${styles.description} ${formcss.subtext}`}>Double-check everything looks OK before confirming</p>
            <section className={`${styles.centersection}`}>
                <section className={`${styles.centersection_top}`}>
                    <div className={`${styles.selectedoption} ${styles.plan}`}>
                        <div>
                            <p className={`${styles.selectedplan} ${styles.summarytxt}`}>{`${selectedplan} (${plan})`}</p>
                            <a className={`${styles.changes}`}onClick={onclick}>Change</a>
                        </div>
                        <span className={`${styles.pricing} ${styles.pricingplan}`}>{`${planpricing[selectedplan][plan]}${monoryr}`}</span>
                    </div>
                    {
                        addons.onlineservice ? 
                        <div className={styles.selectedoption}>
                            <p>{`Online service`}</p>
                            <span className={`${styles.pricing}`}>{`+${planpricing["onlineservice"][`${plan}`]}${monoryr}`}</span>
                        </div>
                        : null
                    }
                    {
                        addons.largerstorage ? 
                        <div className={styles.selectedoption}>
                            <p>{`Larger storage`}</p>
                            <span className={`${styles.pricing}`}>{`+${planpricing["largerstorage"][`${plan}`]}${monoryr}`}</span>
                        </div>
                        :null
                    }
                    {
                        addons.customizableprofile ? 
                        <div className={styles.selectedoption}>
                            <p>{`Customizable profile`}</p>
                            <span className={`${styles.pricing}`}>{`+${planpricing["customizableprofile"][`${plan}`]}${monoryr}`}</span>
                        </div>
                        :null
                    }           
                </section>
                <section className={styles.centersection_bottom}>
                    <div className={styles.selectedoption}>
                        <p>Total (per month)</p>
                        <span className={`${styles.totalpricing}`}>{`+$${total}${monoryr}`}</span>
                    </div>    
                </section>
            </section>
        </fieldset>
    )
}

export default Summary