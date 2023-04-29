/* eslint-disable react/self-closing-comp */
/* eslint-disable @babel/object-curly-spacing */
import React, { useEffect } from "react"
import { useRef } from "react"
import { Header } from "./Header/Header.jsx"
import { GlobaleContainer } from "./Main/GlobaleContainer.jsx"
import { Footer } from "./Footer/Footer.jsx"
import { Aside } from "./Aside/Aside.jsx"
import { Main } from "./Main/Main.jsx"
import { startTitleObserver } from "../js/titlesObserver.js"
import { startCardObserver } from "../js/technoCardObserver.js"
import { Loader } from "./Loader.jsx"

export const Home=()=>{

    const mainRef=useRef()

    useEffect(()=>
    {
        startTitleObserver()
        startCardObserver()
    })
    
    return (

        <>
            <Header  mainRef={mainRef} />
            <Aside/>
            <GlobaleContainer ref={mainRef}>
                <Main/>
                <Footer/>
            </GlobaleContainer>
            <Loader/>        
        </>
    )
}