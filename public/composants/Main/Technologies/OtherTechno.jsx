/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Card } from "./Card"

export const OtherTechno=()=>{

    const otherList=["git","github","vitejs"]

    const cards=otherList.map((el,key)=>
    {
        return <Card class_name="other_card" path="other" name={el} key={key} />
    })

    return (
        <section>
            <h3>Outils</h3>
            <div className="techno_cards">{cards}</div>
        </section>
    )

}