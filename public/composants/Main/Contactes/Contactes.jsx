/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Contacte } from "./Contacte.jsx"


export const Contactes=()=>{

    const list=[

        {
            href:"#",
            imgPath:"img/facebook-svgrepo-com",
            alt:"Facebook"
        },
        {
            href:"mailto:fadougbogautier@gmail.com",
            imgPath:"img/mail-svgrepo-com",
            alt:"Email"
        },
        {
            href:"tel:+22991810043",
            imgPath:"img/whatsapp-svgrepo-com",
            alt:"Whatsapp"
        },
        {
            href:"#",
            imgPath:"pictures/other/other_github",
            alt:"Github"
        }
        
    ]

    const contacteList=list.map((el,key)=>{

        return <Contacte key={key} info={el} />
    })

    return (
            <div id="contactes"  className="contactes_section" >
                <h2>Contactes</h2>
                <div id="contacte_list" >{contacteList} </div>
            </div>
           )
}