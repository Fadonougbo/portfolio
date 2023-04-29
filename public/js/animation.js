import throttle from "lodash.throttle"



const setLogoPosition=(currentCouche,children,rotateDeg)=>{

    const parentHeight=currentCouche.offsetHeight

    children.forEach((el,key)=>
    {
        el.style.setProperty("transform",`rotate(${rotateDeg*key}deg) translateY(${parentHeight/2}px)`)
    })
}

export const circleStartAnimation=()=>{

    const couches=document.querySelectorAll(".couche")

    couches.forEach((couche,key)=>{

        const children=[...couche.children]

        const deg=360/children.length

        setLogoPosition(couche,children,deg)

        const onResize=()=>
        {
            setLogoPosition(couche,children,deg)
        }

        window.addEventListener("resize",throttle(onResize,400) )


        /**
         * Determine le sens de rotation des couches
         */
        const rotateDirection=key%2===0?-360:360

        /**
         * Animation
        */

        circleAnimate(couche,rotateDirection)
    })


}

/**
 * Animation
 * @param {HTMLElement} element 
 * @param {number} rotateDirection 
 */
function circleAnimate(element,rotateDirection)
{
    element.animate(
        [
            {transform:`rotate(${rotateDirection}deg)`}
        ],
        {
            duration:22000,
            iterations:"Infinity",
            direction:"normal"
        })
}