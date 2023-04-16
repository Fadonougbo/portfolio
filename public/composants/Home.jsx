/* eslint-disable @babel/object-curly-spacing */
import React from "react"
import { useRef } from "react"
import { Header } from "./Header/Header.jsx"
import { GlobaleContainer } from "./Main/GlobaleContainer.jsx"
import { Footer } from "./Footer/Footer.jsx"
import { Aside } from "./Aside/Aside.jsx"
import { Main } from "./Main/Main.jsx"

export const Home=()=>{

    const mainRef=useRef()
    
    return (

        <>
            <Header  mainRef={mainRef} />
            <Aside/>
            <GlobaleContainer ref={mainRef}>
                <Main/>
                <Footer/>
            </GlobaleContainer>         
        </>
    )
}