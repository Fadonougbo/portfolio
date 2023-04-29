

export class MenuIndicator 
{
    /**
     * 
     * @param {string} parentEl 
     * @param {string} childEl 
     */
    constructor(parentEl,childEl)
    {
        this.parentEl=document.querySelector(parentEl)
        this.childEl=[...document.querySelectorAll(childEl)]

        this.addSpan=this.addSpan.bind(this)
        this.addClassActive=this.addClassActive.bind(this)
        this.getPosition=this.getPosition.bind(this)
        this.addEvent=this.addEvent.bind(this)
        this.run=this.run.bind(this)

        this.addSpan()
        this.addClassActive()
    }

    addClassActive()
    {
        if(this.childEl.length>0)
        {
            this.childEl[0].classList.add("active")
        }
    }

    /**
     * create and add span in child
     */
    addSpan()
    {

        this.childEl.forEach((el)=>{
            const span=document.createElement("span")
            span.setAttribute("class","indicator")
            el.appendChild(span)
        })
    }

    /**
     * 
     * @param {HTMLElement} oldSection 
     * @param {HTMLElement} currentSection 
     * @returns {{posX:number,posY:number}}
     */
    getPosition(oldSection,currentSection)
    {

        const oldPosX=oldSection.getBoundingClientRect().x
        const currentPosX=currentSection.getBoundingClientRect().x

        const oldPosY=oldSection.getBoundingClientRect().y
        const currentPosY=currentSection.getBoundingClientRect().y 

        const posX=oldPosX-currentPosX

        const posY=oldPosY-currentPosY

        return {posX,posY}
    }

    addEvent(currentElement)
    {

            const activeSection=this.parentEl?.querySelector(".active")

            const currentSection=currentElement
            
            const indicator=currentSection.querySelector(".indicator")

            if(activeSection===currentSection)
            {
                return true;
            }
  
            activeSection.classList.remove("active")
            currentSection.classList.add("active")

            const {posX,posY}=this.getPosition(activeSection,currentSection)

           indicator.animate([

                {transform:`translate3d(${posX}px,${posY}px,0)`},
                {transform:`translate3d(0,0,0)`}

           ],{
              duration:275,
              fill:"forwards",
              easing:"cubic-bezier(0,.28,.9,.66)"
           })
    }

    run(currentElement)
    {
        this.addEvent(currentElement)
    }
} 