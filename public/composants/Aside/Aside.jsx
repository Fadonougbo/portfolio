/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/display-name */
/* eslint-disable react/self-closing-comp */
import React, { useEffect} from "react"
import {createPortal} from "react-dom"
import { AsideSection } from "./AsideSection"
import { MenuIndicator } from "../../js/MenuIndicator.js"
import { startSectionObserver } from "../../js/mainSectionObserver.js"
import { Helper } from "../../js/Helper.js"


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
            liaisonName:"about_section"
        }, 
        {
            id:"project",
            name:"Mes projets",
            liaisonName:"project_section"
        },
        {
            id:"skills",
            name:"Mes compétences",
            liaisonName:"skills_section"
        },
        {
            id:"contact",
            name:"Contactes",
            liaisonName:"contact_section"
        }
    ]


    useEffect(()=>{

        function init()
        {
            const menuIdicator=new MenuIndicator("aside","aside section")
            startSectionObserver(menuIdicator)
        }

        init()

        Helper.setAsideDefaultHeight()

    },[])

    const AsideSectionList=sectionList.map((el,key)=>
    {
        const {id,liaisonName,name}=el
        return <AsideSection id={id} liaisonName={liaisonName}  key={key} >{name}</AsideSection>
    })

    return (createPortal(<aside>{AsideSectionList}</aside>,document.body))
}