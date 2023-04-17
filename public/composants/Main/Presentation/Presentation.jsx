/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { CircleAnimation } from "./CircleAnimation.jsx"

export const Presentation=()=>{

    const couches=[

        {
            name:"couche_1",
            path:"frontend",
           links:["html","css","javascript","react","redux","scss"] 
        },

        {
            name:"couche_2",
            path:"backend",
            links:["fastify","node","php"] 
         },

        {
            name:"couche_3",
            path:"database",
            links:["mongoDB","mysql","postgreSql"] 
         },

        {
            name:"couche_4",
            path:"other",
            links:["git","github","vitejs"] 
         }

        ]


    return (
            <div id="presentation" >
                <h1 className="typing">Bienvenue sur mon portfolio.</h1>
                <div id="presentation_container" >
                    <section id="perso_description" className="presentation_section" >
                        <h2>Qui suis-je ?</h2>
                        <p>Salut je m'appelle <span>Gautier Fadonougbo</span>, je suis développeur web full stack .</p>
                        <p>Je suis passionné par le développement web, le développement d'applications mobile et tous ce qui a atrait à la programmation informatique depuis plus de 3 ans maintenant .</p>
                        <p>J'aide les entreprises et les particuliers à augmenter leur visibilité sur internet ainsi que leur revenu .</p>
                    </section>

                    <section id="circle" >
                        <CircleAnimation coucheInfo={couches} />
                    </section>
                </div>
            </div>
    )
}