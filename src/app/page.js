"use client"
import styles from "./page.module.css";
import { useReducer } from "react";
import { store, initialState, reducer } from "./state";
import Forms from "./components/form/form";


export default function Home() {

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <main className={`${styles.main}`}>
      <store.Provider value={[state,dispatch]}>
        <Forms/>
      </store.Provider>
    </main>
  );
}
