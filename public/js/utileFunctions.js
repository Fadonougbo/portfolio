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