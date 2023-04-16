/* eslint-disable react/no-unescaped-entities */
import React from "react"

export const Projects=()=>{

    return (
            <div id="projects" className="project_section" >
               <section><h2>Mes projets</h2></section>
               <section className="project_card" >
                    {/* <img src="" alt="" /> */}
                    <div id="image" ></div>

                    <div id="project_info" >
                        <h4>Nom: <p>Portfolio</p></h4>
                        <h4>Description: <p>Realisation de mon portfolio</p> </h4>
                            <h4>Languages et technologies utilisées:</h4>
                            <ul>
                                <li>React js</li>
                                <li>Scss</li>
                                <li>Javascript</li>
                                <li>Vite js</li>
                            </ul> 
                    </div>
               </section>
            </div>
    )
}