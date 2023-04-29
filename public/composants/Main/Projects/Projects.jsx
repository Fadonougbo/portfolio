/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Techno } from "./Techno.jsx"

export const Projects=()=>{

    const technoList=["React JS","Scss","Javascript","Vite js","Git"]

    const list=technoList.map((el,key)=>
    {
      return <Techno key={key} name={el}/>
    })

    return (
            <div id="projects" dataset={"project_section"} className="main_section" >
               <section><h2>Mes projets</h2></section>
               <section className="project_card" >
                    <div id="image" ></div>
                    <div id="project_info" >
                        <h4>Nom: <p>Portfolio</p></h4>
                        <h4>Description: <p>Realisation de mon portfolio</p> </h4>
                         <h4>Languages et technologies utilisées:{list}</h4>
                    </div>
               </section>
            </div>
    )
}