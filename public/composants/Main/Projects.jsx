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
                        <h3><a href="#">Portefolio</a></h3>
                        <p>Realisation de mon portefolio personelle </p>
                            <h4>Languages et technologies utilisé:</h4>
                            <ul>
                                <li>React js</li>
                                <li>Scss</li>
                                <li>Javascript</li>
                            </ul> 
                    </div>
               </section>
            </div>
    )
}