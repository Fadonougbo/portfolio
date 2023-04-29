/**
 * permet de faire scroller vers une section en cas de click au niveau de la navigation
 * 
 * @param {string} sectionName nom de la section de liaison
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
    
    const el=document.querySelector(`[dataset=${sectionName}]`)

    const scrollY=window.scrollY

    const topPosition=el.getBoundingClientRect().top

    const elementScrollPosition=scrollY+topPosition

    window.scrollTo({
        top:elementScrollPosition,
        behavior:"smooth"
    })

}