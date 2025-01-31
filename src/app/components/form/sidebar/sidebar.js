"use client"
import {useContext,useEffect,useRef} from 'react'
import styles from "./sidebar.module.css"
import { store } from "../../../state";


export default function Sidebar(){

    const [state,dispatch] = useContext(store);
    const{activelink} = state;
    const links = useRef();

    useEffect(() => {
        let arraylinks = links.current.children;
        for(let x=0; x <arraylinks.length;x++){
            if(arraylinks[x].id == activelink){
                if(arraylinks[x].classList.length == 0){
                    arraylinks[x].classList.add(`${styles.active}`)
                }
            } else if(arraylinks[x].id != activelink){
                if(arraylinks[x].classList.length != 0){
                    arraylinks[x].classList.remove(`${styles.active}`)
                }
            }
        }
        return () => {   
        };
    }, [links,activelink]);

    const onClick = (event)=>{
        console.log(event.target.id === "personal info")
        dispatch({type:"ACTIVELINK",payload:event.target.id})
    }

    return (
        <aside className={styles.aside}>
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