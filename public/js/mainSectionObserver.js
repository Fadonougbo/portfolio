let menuIndicator;

const observer=new IntersectionObserver((elementList)=>
{
    elementList.forEach((el)=>
    {

        if(el.isIntersecting)
        {

            const dataset=el.target.getAttribute("dataset")

            const explodeDataset=(dataset.split("_"))[0]

            const asideSectionLiaison=document.querySelector(`#${explodeDataset}`)

            menuIndicator.addEvent(asideSectionLiaison)

        }
       
    })
        
},{
    threshold:0
})

/**
 * 
 * @param {menuIndicator} menuIndicatorInstance 
 */
export function startSectionObserver(menuIndicatorInstance)
{
    const sections=document.querySelectorAll(".main_section")
     const sectionList=[...sections]
    /**
     * Initialisation menu indicator
     */
    menuIndicator=menuIndicatorInstance

    if(sectionList.length>0)
    {
        sectionList[0].classList.add("visible_Main_Section")
    }
     sectionList.map((el)=>
     {
        observer.observe(el)
     })

}