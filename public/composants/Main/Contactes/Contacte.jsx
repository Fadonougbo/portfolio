import React from "react";

export const Contacte=({info})=>{

    const {href,imgPath,alt}=info


    return <a href={href}><img src={`../../${imgPath}.svg`} alt={alt+" logo"} /></a>
}