/* eslint-disable react/self-closing-comp */
import React from "react";
import { scrollto } from "../../js/scrollto.js";

export const AsideSection=({id,liaisonName,children})=>{
    
    const click=()=>
    {
        if(liaisonName)
        {
            scrollto(liaisonName)
        }
        
    }

    return (
        <section id={id} onClick={click} >
            <div>
                <img src={`aside/aside_${id}.svg`} alt={id+" logo"} />
            </div>
            <span className="section_title" >{children}</span>
        </section>
    )
}