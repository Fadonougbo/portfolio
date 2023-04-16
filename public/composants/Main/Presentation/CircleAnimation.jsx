/* eslint-disable react/self-closing-comp */
/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
import React, {useEffect, useRef } from "react"
import { circleStartAnimation, createInsetDiv } from "../../../js/utileFunctions.js"

export const CircleAnimation=({coucheInfo})=>{


   const circleRef=useRef()


    useEffect(()=>{

        createInsetDiv(circleRef.current,coucheInfo)
        circleStartAnimation()
        
    },[])

    return (

        <div id="circle_animation" ref={circleRef} > </div>
       
    )

}