import styles from "./form.module.css"
import Personalinfo from "./personalInfo/personalinfo"
import AddOns from "./pickAddons/addons"
import SelectPlan from "./selectPlan/selectPlan"
import Sidebar from "./sidebar/sidebar"
import Form from "next/form"
import Summary from "./Summary/summary"
import Confirmation from "./confirmation/confirmation"
import Buttoncomp from "./buttons/buttons"
import { useContext } from "react"
import { store } from "@/app/state"


export default function Forms(){

    const[state,dispatch] = useContext(store)

    function onSubmit(){
        /* 
            This function is responsible for submiting
            the user data to the backend when implimented
            and route the user to different page
        */
    }
    return (
        <Form action={onSubmit}className={`${styles.form}`}>
            <Sidebar/>
            <Personalinfo/>
            <SelectPlan/>
            <AddOns/>
            <Summary/>
            <Confirmation/>
            <Buttoncomp/> 
        </Form>
    )
}