/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Card } from "./Card"

export const Database=()=>{

    const databaseList=["mysql","postgreSql","mongoDB"]

    const cards=databaseList.map((el,key)=>
    {
        return <Card class_name="datatbase_card" path="database" name={el} key={key} />
    })

    return (
        <section>
            <h3>Database</h3>
            <div id="techno_cards">{cards}</div>
        </section>
    )

}