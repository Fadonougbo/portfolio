/* eslint-disable react/self-closing-comp */
/* eslint-disable @babel/object-curly-spacing */
import React from "react"
import { createPortal } from "react-dom"

export const Loader=()=>{


    return (createPortal(
        <div id="loader" className="load">
            <section id="sect_1" >
                <section id="sect_2" >
                    <section id="sect_3" >
                    </section>
                </section>
            </section>
        </div>,document.body)
    )
}