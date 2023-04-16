/* eslint-disable react/display-name */
/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import { Presentation } from "./Presentation/Presentation.jsx";
import { Projects } from "./Projects.jsx";
import { Technologies } from "./Technologies/Technologies.jsx";
import { Contactes } from "./Contactes/Contactes.jsx";

export const Main=()=>{

    return (

        <main>
            <Presentation/>
            <Projects />
            <Technologies/> 
            <Contactes/>
        </main>
    
    )
}
