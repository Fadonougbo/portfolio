/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
import React, {useEffect, useRef } from "react"

export const CircleAnimation=({coucheInfo})=>{


   const circleRef=useRef()


    useEffect(()=>{

        const element=circleRef.current
        /**
         * Liste des couche
         */
        const arr=Object.keys(coucheInfo)

        /**
         * Mape un tableau pour créer les differentes couche
         */
        arr.map((el,key)=>
        {

            if (key===0)
            {
                const svgLinks=coucheInfo[arr.at(0)].links.map((el)=>{

                    return `<img src="${el}" alt="logo"  />`
                })

                element.innerHTML=`<div class="couche"  id="couche_${1}">
                                     ${svgLinks.join(" ")}
                                   </div>`

                return;
            }

            /**
             * Selection de la couche precedente
             */
            const couche=document.querySelector(`#couche_${key}`)

            /**
             * Creaction de balise img a partire des differents liens du tableau links
             */
            const svgLinks=coucheInfo[el].links.map((el)=>{

                return `<img src="${el}" alt="logo"  />`
            })

            couche.innerHTML+=`<div class="couche"  id="couche_${key+1}">
                                ${svgLinks.join(" ")}
                            </div>` 
        })

        /**
         * *******************
         */
        const couche=[...document.querySelectorAll(".couche")].reverse()


        

        couche.forEach((el,key)=>
        {
            const size=(100/couche.length)*(key+1)

            el.style.setProperty("width",`${size}%`)
            el.style.setProperty("height",`${size}%`) 

            const imgList=[...el.children].filter((element)=>
            {
               return !element.classList.contains("couche")
            })


            imgList.forEach((e,k)=>{
                    /* const  deg=360/imgList.length
                    console.log(deg*(k+1));
                    e.style.transform=`rotate(${(deg)*(k+1)}deg) translateY(-${size/2}%)`*/
             
            })
            
        })



    },[])

    return (

        <div id="circle_animation" ref={circleRef} ></div>
       
    )

}