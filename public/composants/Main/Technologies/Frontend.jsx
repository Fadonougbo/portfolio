/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Card } from "./Card"

export const Frontend=()=>{

    const frontsList=["html","css","javascript","react","scss","redux"]

    const cards=frontsList.map((el,key)=>
    {
        return <Card class_name="frontend_card" path="frontend" name={el} key={key} />
    })


    return (
        <section>
                <h3>Front-end</h3>
                <div className="techno_cards">{cards}</div>
        </section>
    )

}