/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react"
import { CircleAnimation } from "./CircleAnimation.jsx"
import { typingAnimation } from "../../../js/animation/typingAnimation.js"

export const Presentation=()=>{

    const couches={

        couche_1:{

           links:["../../img/css-svgrepo-com.svg","../../img/html-5-svgrepo-com.svg","../../img/css-svgrepo-com.svg","../../img/css-svgrepo-com.svg","../../img/html-5-svgrepo-com.svg"] 
        },

        couche_2:{

            links:["../../img/html-5-svgrepo-com.svg","../../img/css-svgrepo-com.svg","../../img/css-svgrepo-com.svg","../../img/html-5-svgrepo-com.svg"] 
         },

         couche_3:{

            links:["../../img/html-5-svgrepo-com.svg","../../img/css-svgrepo-com.svg","../../img/css-svgrepo-com.svg","../../img/html-5-svgrepo-com.svg"] 
         },

         couche_4:{

            links:[] 
         }
        
    }


    return (
            <div id="presentation" >
                <h1 className="typing">Bienvenue sur mon portfolio.</h1>
                <section id="perso_description" className="presentation_section" >
                    <h2>A propos</h2>
                    <p>Salut je m'appelle <span>Gautier Fadonougbo</span>, je suis developpeur web full stack.  Passionné par le developpement web ,le developpement mobile et tous ce qui a atrait à la programmation informatique  depuis plus de  3ans maintenant </p>
                </section>

                <section id="circle" >
                    <CircleAnimation coucheInfo={couches} />
                    
                </section>
            </div>
    )
}