'use client'
import { useContext, useRef, useEffect } from 'react'
import { store } from '../../../state'
import styles from './addons.module.css'
import globalformcss from "../globalform.module.css"

const AddOns = () => {
    const [state, dispatch] = useContext(store)
    let{plan,planpricing,addons,activelink}=state
    let addonss = useRef()

    // styling for when addon is selected
    useEffect(() => {
        const addonsChildren = addonss.current.children;
        const addonTypes = ['onlineservice', 'largerstorage', 'customizableprofile'];
        
        addonTypes.forEach((type, index) => {
            addonsChildren[index].classList.toggle(styles.checkedones, addons[type]);
        });
    }, [addons]);

    let onchange = (e)=>{
        dispatch({type:"ADD_ADDONS",payload:e.target.id})
    }

    const visible = activelink === "add-ons" ? "fieldset" : "fieldsethidden";
    const getPrice = (type) => `${planpricing[type][plan === "monthly" ? "monthly" : "yearly"]}/${plan === "monthly" ? "mo" : "yr"}`;
    
    const onlineservice = getPrice("onlineservice");
    const largerstorage = getPrice("largerstorage");
    const customizableprofile = getPrice("customizableprofile");
    
    return (
        <fieldset className={`${styles[visible]} ${globalformcss.mainContainer}`}>
           <h1  className={`${globalformcss.header}`}>Pick add-ons</h1>
            <p className={`${styles.topdescription} ${globalformcss.subtext}`}>Add-ons help enhance your gaming experience</p>
            <section ref={addonss}>
                <label htmlFor='onlineservice'>
                    <div className={styles.leftcontainer}>
                        <div>
                            <input onChange={onchange}className={`${styles.input}`}id="onlineservice"type="checkbox"/>
                            <span className={styles.inputvisual}></span>
                        </div>
                        <div className={styles.info}>
                            <h4>Online service</h4>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <div className={`${styles.pricing}`}>
                        {onlineservice}
                    </div>
                </label>
                <label htmlFor='largerstorage'>
                    <div className={styles.leftcontainer}>
                        <div>
                            <input onChange={onchange}className={`${styles.input}`}id="largerstorage"type="checkbox"/>
                        </div>
                        <div className={styles.info}>
                            <h4 >Larger storage</h4>
                            <p>Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <div className={`${styles.pricing}`}>
                        {largerstorage}
                    </div>
                </label>
                <label htmlFor='customizableprofile'>
                    <div className={styles.leftcontainer}>
                        <div>
                            <input onChange={onchange}className={`${styles.input}`}id="customizableprofile"type="checkbox"/>
                        </div>
                        <div className={styles.info}>
                            <h4>Customizable profile</h4>
                            <p>Custom theme on your profile</p>
                        </div> 
                    </div>
                    <div className={`${styles.pricing}`}>
                        {customizableprofile}
                    </div>
                </label>
            </section> 
        </fieldset>
    )
}
 
export default AddOns
