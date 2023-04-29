/* eslint-disable react/self-closing-comp */
/* eslint-disable react/display-name */
/* eslint-disable @babel/object-curly-spacing */
import React,{forwardRef, useEffect} from "react"
import { Helper } from "../../js/Helper.js"

export const GlobaleContainer=forwardRef( ({props,children},ref)=>{

    useEffect(()=>{

      Helper.setDefault_GlobalContainer_Position()

    },[])
    
    return <div id="globale_container" ref={ref} >{children}</div> 
} )