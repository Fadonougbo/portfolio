import React from "react";
import {scrollto } from "../../js/utileFunctions";

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
                <img src={`../../pictures/aside/aside_${id}.svg`} alt={id+" logo"} />
            </div>
            <span>{children}</span>
        </section>
    )
}