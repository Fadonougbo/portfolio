/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Card } from "./Card"

export const Backend=()=>{

    const backList=["php","node"]

    const cards=backList.map((el,key)=>
    {
        return <Card class_name="backend_card" path="backend" name={el} key={key} />
    })

    return (
        <section>
            <h3>Backend</h3>
            <div id="techno_cards">{cards}</div>
        </section>
    )

}