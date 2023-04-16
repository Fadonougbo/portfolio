/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/display-name */
/* eslint-disable react/self-closing-comp */
import React from "react"
import { setMainTranslatePosition } from "../../js/utileFunctions.js"

export const Header=({mainRef})=>
{

    const menuClick=()=>{

        setMainTranslatePosition(mainRef.current)
    }
    return (
            <header>
                <div onClick={menuClick} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
    )
}