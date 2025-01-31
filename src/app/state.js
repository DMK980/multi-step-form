import {createContext } from "react";

export const store = createContext()

export const initialState = {
    // errorhandling and pagination
    activelink: "personal info",
    error: "noerror",

    // userinput
    name: "",
    emailinput: "",
    phonenumber: "",
    plan: "monthly",
    selectedplan: "Arcade",
    addons:{
        "onlineservice":false,
        "largerstorage":false,
        "customizableprofile":false
    },

    // pricing data
    planpricing: {
        // pricing plans
        Arcade:{monthly : "$9",yearly : "$90"},
        Advanced:{monthly : "$12",yearly : "$120"},
        Pro:{monthly : "$15",yearly : "$150"},
        // options
        onlineservice:{monthly : "$1",yearly : "$10"},
        largerstorage:{monthly : "$2",yearly : "$20"},
        customizableprofile:{monthly : "$2",yearly :"$20"}
    }
}

export const reducer = (state,action) =>{
    switch(action.type){
        case "ACTIVELINK":
            if(!state.name || !state.emailinput || !state.phonenumber){
                return{...state,error:"error"}
            } else if(state.name || state.emailaddress || state.phonenumber){
                return {...state,activelink:action.payload,error:"noerror"}
            }
        case "NAMEUPDATE":
            if (action.payload.name){
                return {...state,name:action.payload.name}
            }else {
                return {...state,name:""}
            }
        case "EMAILUPDATE":
            if (action.payload.emailinput){
                return {...state,emailinput:action.payload.emailinput}
            }else{
                return {...state,emailinput:""}
            }
        case "PHONEUPDATE":
            if (action.payload.phonenumber){
                return {...state,phonenumber:action.payload.phonenumber}
            } else {
                return {...state,phonenumber:""}
            }
        case "CHANGEPLAN":
            return {...state,selectedplan:action.payload}
        case "SWITCHPLAN":
            if(state.plan == "monthly"){
                return {...state,plan:"yearly"}
            }else{
                return {...state,plan:"monthly"}
            }
        case "ADD_ADDONS":
            if(!state.addons[action.payload]){
                return {...state,addons:{...state.addons,[`${action.payload}`]:true }}
            } else {
                return {...state,addons:{...state.addons,[`${action.payload}`]:false}}
            }
    }
}