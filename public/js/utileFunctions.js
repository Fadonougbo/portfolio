import throttle  from "lodash.throttle"

/**
 * Place le composant GlobaleContainer convenablement
 * en donnant un margin top
 */
export const setDefaultMainPosition=()=>{

    const header=document.querySelector("header")
    const move=document.querySelector("#globale_container")
    
    const headerHeight=header.offsetHeight
 
    move.style.setProperty("margin-top",`${headerHeight}px`)
 
}

/**
 * Determine la hauteur du side bar
 */
export const setAsideHeight=function()
{
    const header=document.querySelector("header")
    const aside=document.querySelector("aside")

    const headerHeight=header.offsetHeight
    
    aside.style.setProperty("height",`calc(100vh - ${headerHeight}px)`)

}

/**
 * Permet de faire bouger le globaleContainer
 * Donne un overflow hidden au body et l'enlève apres la fermetur du menu 
 * @param {*} main 
 */
export const setMainTranslatePosition=(globaleContainer)=>
{
    const aside=document.querySelector("aside")

    const asideWidth=aside.offsetWidth

    globaleContainer.classList.toggle("move")

    const removeOverflow=()=>{
            document.body.style.overflow=""
        
    }


    if (globaleContainer.classList.contains("move")) 
    {
        globaleContainer.style.setProperty("transform",`translateX(${asideWidth}px)`)
        document.body.style.overflow="hidden"

    }else 
    {   
        globaleContainer.style.setProperty("transform",`translateX(0)`)
        globaleContainer.addEventListener("transitionend",removeOverflow,{once:true})
        

    }
    
}

/**
 * permet de faire scroller vers une section en cas de click au niveau de la navigation
 * 
 * @param {*} sectionName nom de la section de liaison
 * @returns 
 */
export const scrollto=(sectionName)=>{

    if(sectionName==="home_section")
    {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })

        return;
    }
    const el=document.querySelector(`.${sectionName}`)

    const scrollY=window.scrollY

    const topPosition=el.getBoundingClientRect().top

    const elementScrollPosition=scrollY+topPosition

    window.scrollTo({
        top:elementScrollPosition,
        behavior:"smooth"
    })

}

/**
 * creation des diferentes couches
 * 
 * @param {*} firstDiv 
 * @param {*} coucheInfo 
 */
export const createInsetDiv=(firstDiv,coucheInfo)=>
{

        /**
         * Mape un tableau pour créer les differentes couche
         */
        coucheInfo.map((el,key)=>
        {

            const newDiv=document.createElement("div")
            newDiv.setAttribute("class",`couche couche_${key+1}`)

            const ratio=100-(key*25)
            /**
             * hauteur et largeur des div
             */
            newDiv.style.width=`${ratio}%`
            newDiv.style.height=`${ratio}%`

            /**
             * path pour les images
             */
            const path=el.path

            /**
             * ajout des images à chaque couche
             */
            el.links.forEach((link)=>
            {
                newDiv.innerHTML+=`<img src="../pictures/${path}/${path}_${link}.svg" alt="logo" />`
            })

            /**
             * ajout des div au parent
             */
            firstDiv.appendChild(newDiv)
            
        })
}

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
