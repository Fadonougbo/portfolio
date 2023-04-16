/* eslint-disable @babel/object-curly-spacing */
import React from "react";
import {createRoot} from "react-dom/client"
import { Home } from "./Home.jsx";

/**
 * composant pricipale
 */
const App=()=>{
    return <Home/> ;
}

const root=createRoot(document.querySelector("#app"))

root.render(<App/>)

