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
 * Permet de faire bouger le main
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


export const getPosition=(sectionName)=>
{
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

export const createInsetDiv=(firstDiv,coucheInfo)=>
{
        /**
         * Liste des couches
         */
        /* const arr=Object.keys(coucheInfo) */

        /**
         * Mape un tableau pour créer les differentes couche
         */
        coucheInfo.map((el,key)=>
        {

            const newDiv=document.createElement("div")
            newDiv.setAttribute("class",`couche couche_${key+1}`)

            const ratio=100-(key*20)

            newDiv.style.width=`${ratio}%`
            newDiv.style.height=`${ratio}%`

            const path=el.path

            el.links.forEach((link)=>
            {
                newDiv.innerHTML+=`<img src="../pictures/${path}/${path}_${link}.svg" alt="logo" />`
            })

            firstDiv.appendChild(newDiv)
            
        })
}

export const circleStartAnimation=()=>{

    const couches=document.querySelectorAll(".couche")

    couches.forEach((couche,key)=>{

        const children=[...couche.children]

        const parentHeight=couche.offsetHeight

        const deg=360/children.length

        children.forEach((el,key)=>
        {
            el.style.setProperty("transform",`rotate(-${deg*key}deg) translateY(${parentHeight/2}px)`)
        })

        const d=key%2===0?-360:360

        couche.animate(
            [
                {transform:`rotate(${d}deg)`}
            ],
            {
                duration:22000,
                iterations:"Infinity",
                direction:"normal"
            })
    })


}