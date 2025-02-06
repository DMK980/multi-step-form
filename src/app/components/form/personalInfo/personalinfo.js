"use client"
import {useContext, useRef,useEffect}from 'react'
import { store } from '../../../state'
import styles from "./personalinfo.module.css"
import globalformcss from "../globalform.module.css"

const Personalinfo = () => {
    
    const [state,dispatch] = useContext(store)
    let {activelink,error,name,emailinput,phonenumber} = state
    let fieldset = useRef()
    const visible = activelink == "personal info"? "fieldset":"fieldsethidden"
    
    useEffect(() => {
        // error handling
        if (error === "error") {
            const fields = [
                { id: "name_container", value: name },
                { id: "email_container", value: emailinput },
                { id: "telephone_container", value: phonenumber }
            ];

            fields.forEach(field => {
                const element = fieldset.current.querySelector(`#${field.id}`);
                if (!field.value) {
                    element.classList.add(styles.errorshown);
                } else {
                    element.classList.remove(styles.errorshown);
                }
            });
        }
    }, [error, name, phonenumber, emailinput]);

    const onchange = (e) => {
        const actions = {
            name: {type: "NAMEUPDATE", field: "name"},
            email: {type: "EMAILUPDATE", field: "emailinput"},
            telephone_number: {type: "PHONEUPDATE", field: "phonenumber"}
        };
        
        const action = actions[e.target.id];
        if (action) {
            dispatch({type: action.type, payload: {[action.field]: e.target.value}});
        }
    }

    return (
        <fieldset className={`${styles[visible]} ${globalformcss.mainContainer}`}ref={fieldset}>
            <h1 className={`${globalformcss.header}`}>Personal info</h1>
            <p className={`${globalformcss.subtext}`}>Please provide your name, email address, and phone number.</p>
            <section id="name_container">
                <label htmlFor="name">Name</label>
                <p>This field is required</p>
                <input id="name"type="text"onChange={onchange}placeholder='e.g.Stephen King' required/>
            </section>
            <section id="email_container">
                <label htmlFor="email">Email Address</label>
                <p>This field is required</p>
                <input id="email"type="email"onChange={onchange}placeholder='e.g.Stephen King@lorem.com' required/>
            </section>
            <section id="telephone_container">
                <label htmlFor="telephone number">Phone Number</label>
                <p>This field is required</p>
                <input id="telephone_number"onChange={onchange}type="tel"placeholder='e.g.+1 234 567 890' required/>
            </section>
        </fieldset>
    )
}

export default Personalinfo