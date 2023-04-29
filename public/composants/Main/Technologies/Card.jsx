import React from "react";


export const Card=({class_name,path,name})=>
{

    return (
        <div className={`card ${class_name}`} >
                    
            <div className="logo">
                <img src={`${path}/${path}_${name}.svg`} alt={name+" logo"} />
            </div>
                <span>{name}</span>
        </div>
    )
}