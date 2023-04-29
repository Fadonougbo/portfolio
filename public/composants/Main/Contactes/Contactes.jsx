/* eslint-disable react/no-unknown-property */
/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Contacte } from "./Contacte.jsx"


export const Contactes=()=>{

    const list=[

        {
            href:"https://www.facebook.com/gautier.fadonougbo.9",
            imgPath:"facebook-svgrepo-com",
            alt:"Facebook"
        },
        {
            href:"mailto:fadougbogautier@gmail.com",
            imgPath:"mail-svgrepo-com",
            alt:"Email"
        },
        {
            href:"tel:+22991810043",
            imgPath:"whatsapp-svgrepo-com",
            alt:"Whatsapp"
        },
        {
            href:"https://github.com/Fadonougbo?tab=repositories",
            imgPath:"other_github",
            alt:"Github"
        }
        
    ]

    const contacteList=list.map((el,key)=>{

        return <Contacte key={key} info={el} />
    })

    return (
            <div id="contactes" dataset={'contact_section'}  className="main_section" >
                <h2>Me contacté</h2>
                <div id="contacte_list" >{contacteList} </div>
            </div>
           )
}