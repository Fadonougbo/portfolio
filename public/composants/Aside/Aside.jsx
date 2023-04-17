/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/display-name */
/* eslint-disable react/self-closing-comp */
import React from "react"
import { AsideSection } from "./AsideSection"


export const Aside=()=>{

    const sectionList=[
         {
            id:"home",
            name:"Acceuille",
            liaisonName:"home_section"
        },
        {
            id:"about",
            name:"A propos",
            liaisonName:"presentation_section"
        }, 
        {
            id:"project",
            name:"Mes projets",
            liaisonName:"project_section"
        },
        {
            id:"contact",
            name:"Contactes",
            liaisonName:"contactes_section"
        }
    ]

    const AsideSectionList=sectionList.map((el,key)=>
    {
        const {id,liaisonName,name}=el
        return <AsideSection id={id} liaisonName={liaisonName} key={key} >{name}</AsideSection>
    })

    return (<aside>{AsideSectionList}</aside>)
}