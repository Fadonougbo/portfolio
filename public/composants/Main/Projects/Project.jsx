/* eslint-disable react/no-unknown-property */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
import React from "react"

import {Techno} from "./Techno.jsx"

export const Project=({info})=>{

    const {name,description,technologies,imgPath,useMediaQuery}=info

    const list=technologies.map((el,key)=>
    {
      return <Techno key={key} name={el}/>
    })


    return (
               <section className="project_card" >
                    <div id="image" >
                        {
                            useMediaQuery?(
                            <picture>
                                <source media="(max-width:500px)" srcSet={`project/project_${imgPath}_min1.png`} />
                                <img src={`project/project_${imgPath}_min3.png`} alt="" />
                            </picture>
                            ):<img src={`project/project_${imgPath}.png`} alt="" />
                        }
                        
                    </div>
                    <div id="project_info" >
                        <h4>Nom: <p><em>{name}</em></p></h4>
                        <h4>Description: <p><em>{description}</em></p> </h4>
                         <h4>Languages et technologies utilisées:{list}</h4>
                    </div>
               </section>
    )
}