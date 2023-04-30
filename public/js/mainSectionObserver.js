let menuIdicator;

const observer=new IntersectionObserver((elementList)=>
{
    elementList.forEach((el)=>
    {
        if(el.intersectionRatio>0.1)
        {
            const dataset=el.target.getAttribute("dataset")

            const explodeDataset=(dataset.split("_"))[0]

            const asideSectionLiaison=document.querySelector(`#${explodeDataset}`)

            menuIdicator.addEvent(asideSectionLiaison)

        }
       
    })
        
},{
    threshold:[0.1]
})

/**
 * 
 * @param {menuIdicator} menuIdicatorInstance 
 */
export function startSectionObserver(menuIdicatorInstance)
{
    const sections=document.querySelectorAll(".main_section")
     const sectionList=[...sections]
    /**
     * Initialisation menu indicator
     */
    menuIdicator=menuIdicatorInstance

    if(sectionList.length>0)
    {
        sectionList[0].classList.add("visible_Main_Section")
    }
     sectionList.map((el)=>
     {
        observer.observe(el)
     })

}