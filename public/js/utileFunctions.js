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

