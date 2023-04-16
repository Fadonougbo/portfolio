/* eslint-disable @babel/object-curly-spacing */
/* eslint-disable react/display-name */
/* eslint-disable react/self-closing-comp */
import React from "react"
import { setMainTranslatePosition } from "../../js/utileFunctions.js"

export const Header=({mainRef})=>
{

    const menuClick=()=>{
        //burger animation
        let wrapperMenu = document.querySelector('.wrapper-menu');
        wrapperMenu.classList.toggle('open');  

        //Main translate function
        setMainTranslatePosition(mainRef.current)
    }
    return (
            <header>
                <div onClick={menuClick} id="burger">
                    <div className="wrapper-menu">
                        <div className="line-menu half start"></div>
                        <div className="line-menu"></div>
                        <div className="line-menu half end"></div>
                    </div>
                </div>
            </header>
    )
}