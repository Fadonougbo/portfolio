/* eslint-disable react/no-unknown-property */
/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Frontend } from "./Frontend"
import { Backend } from "./Backend"
import { Database } from "./Database"
import { OtherTechno } from "./OtherTechno"

export const Technologies=()=>{

    return (
            <div id="technologies" dataset={"skills_section"} className="main_section">
                <h2>Mes compétences</h2>
                <Frontend/>
                <Backend/>
                <Database/>
                <OtherTechno/>
                    
            </div>
           )
}