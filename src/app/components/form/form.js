import styles from "./form.module.css"
import Personalinfo from "./personalInfo/personalinfo"
import Sidebar from "./sidebar/sidebar"
import Form from "next/form"


export default function Forms(){
    return (
        <Form action=""className={`${styles.mainContainer}`}>
            <Sidebar/>
            <Personalinfo/>
        </Form>
    )
}