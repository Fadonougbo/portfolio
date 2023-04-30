/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { Project } from "./Project.jsx"

export const Projects=()=>{


   const list=[
      {
        name:"Portfolio",
        description:"Realisation de mon portfolio",
        technologies:["React JS","Scss","Javascript","Vite js","Git"],
        imgPath:"portfolio",
        useMediaQuery:true
      },
      {
         name:"Generateur de cahier des charges",
         description:"Site web qui permet de généré un cahier des charges en version pdf (projet de stage)  ",
         technologies:["PHP","Scss","Javascript","Git","Mysql","Mysql Workbench"],
         imgPath:"cahier_de_charge",
         useMediaQuery:false
      },
      {
         name:"Livre d'or",
         description:"Site web qui permet d'ajouter des commentaires (projet personnel)",
         technologies:["Node js","Scss","PostgreSql","Git"],
         imgPath:"livre_dor",
         useMediaQuery:false
       }
   ]

   const projectList=list.map((info,key)=>{
      return <Project info={info} key={key} />
   })

    return (
            <div id="projects" dataset={"project_section"} className="main_section" >
               <section><h2>Mes projets</h2></section>
              <div id="projectCards" >{projectList}</div> 
            </div>
    )
}