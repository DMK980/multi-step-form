"use client"
import {useContext} from 'react'
import styles from "./buttons.module.css"
import { Button } from '@mui/material'
import { store } from '../../../state'


const Buttoncomp = () => {

    let[state,dispatch] = useContext(store)

    let {activelink} = state

    let visibility = activelink == "personal info" ? "hidden": activelink == "confirmation" ? "hidden" : "visible" 
    let visibility2 = activelink == "confirmation" ? "hidden" : "visible"
    let display = activelink == "confirmation" ? "none" : ""
    let text = activelink == "summary" ? "Confirm" : "Next Step"


    let pages = ["personal info","select your plan","add-ons","summary"]
   

    let nextpage = ()=>{
        if(activelink != "summary"){
            dispatch({type:"ACTIVELINK", payload:pages[pages.indexOf(activelink)+1]})
        }
        else{
            dispatch({type:"ACTIVELINK", payload:"confirmation"})
        }
    }

    let lastpage = ()=>{
        if(activelink != "personal info"){
            dispatch({type:"ACTIVELINK", payload:pages[pages.indexOf(activelink)-1]})
        }
    }

    return (
        <div className={styles.btncontainer} style={{display:`${display}`}}>
            <Button 
                sx={{
                width:"fit-content",
                color:"hsl(231, 11%, 63%)",
                visibility:`${visibility}`
                }}
                onClick={lastpage}
            >Go Back

            </Button>
            {
                activelink === "confirmation"? (
                    <Button 
                        sx={{
                            width:"fit-content",
                            visibility:`${visibility2}`
                        }}
                        variant="contained"

                        onClick={nextpage}
                        type='submit'
                    >{`${text}`}
                    </Button>
                ):(
                    <Button 
                        sx={{
                            width:"fit-content",
                            visibility:`${visibility2}`
                        }}
                        variant="contained"

                        onClick={nextpage}
                    >{`${text}`}
                    </Button>
                ) 
            }
        </div>
    )
}

export default Buttoncomp
