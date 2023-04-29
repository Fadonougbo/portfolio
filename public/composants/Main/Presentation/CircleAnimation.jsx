/* eslint-disable react/self-closing-comp */
/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
import React, {useEffect, useRef } from "react"
import { Helper } from "../../../js/Helper.js"
import { circleStartAnimation } from "../../../js/animation.js"

export const CircleAnimation=({coucheInfo})=>{


   const circleRef=useRef()


    useEffect(()=>{

        Helper.createCouche(circleRef.current,coucheInfo)
        circleStartAnimation()
        
    },[coucheInfo])

    return (

        <div id="circle_animation" ref={circleRef} > </div>
       
    )

}