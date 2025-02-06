"use client"
import {useContext,useEffect,useRef} from 'react'
import styles from "./sidebar.module.css"
import { store } from "../../../state";
import formcss from "../form.module.css"


export default function Sidebar(){

    const [state,dispatch] = useContext(store);
    const{activelink} = state;
    const links = useRef(); 

    useEffect(() => {
        const arrayLinks = Array.from(links.current.children);
        arrayLinks.forEach(link => {
            link.classList.toggle(styles.active, link.id === activelink);
        });
    }, [activelink]);

    const onClick = (event)=>{
        dispatch({type:"ACTIVELINK",payload:event.target.id})
    }

    return (
        <aside className={`${styles.aside} ${formcss.aside}`} style={{pointerEvents: activelink === "confirmation"? "none":"auto"}}>
            <nav ref={links}>
                <button id="personal info"type="button"className={styles.active}onClick={onClick}>
                    <span>1</span>
                    <div>
                        <h4>STEP 1</h4>
                        <p>YOUR INFO</p>
                    </div>
                </button>
                <button id="select your plan"type="button"onClick={onClick}>
                    <span>2</span>
                    <div>
                        <h4>STEP 2</h4>
                        <p>SELECT PLAN</p>
                    </div>
                </button>
                <button id="add-ons"type="button"onClick={onClick}>
                <span>3</span>
                    <div>
                        <h4>STEP 3</h4>
                        <p>ADD-ONS</p>
                    </div>
                </button>
                <button id="summary"type="button"onClick={onClick}>
                <span>4</span>
                    <div>
                        <h4>STEP 4</h4>
                        <p>SUMMARY</p>
                    </div>
                </button>
            </nav>
        </aside>
    )
}