import throttle from "lodash.throttle"


export class Helper
{

    /**
     * Donne une margin au globaleContainer
     */
    static setDefault_GlobalContainer_Position()
    {
        const header=document.querySelector("header")
        const move=document.querySelector("#globale_container")
        
        const headerHeight=header.offsetHeight
     
        move.style.setProperty("margin-top",`${headerHeight}px`)
    }

    /**
     * Donne une hauteur initial au side bar
     */
    static setAsideDefaultHeight()
    {
        const header=document.querySelector("header")
        const aside=document.querySelector("aside")
    
        const headerHeight=header.offsetHeight
        
        aside.style.setProperty("height",`calc(100vh - ${headerHeight}px)`)
    }


    /**
     * 
     * Permet de faire bouger le globaleContainer
     * Donne un overflow hidden au body et l'enlève apres la fermetur du menu 
     * @param {HTMLElement} globaleContainer 
     */
    static translateMain(globaleContainer)
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

            const onResize=(e)=>{

                if(window.innerWidth>=1023)
                {
                    globaleContainer.style.setProperty("transform",`translateX(11%)`)
                }else
                {
                    globaleContainer.style.setProperty("transform",`translateX(0)`)
                }
            }

            window.addEventListener("resize",throttle(onResize,450) )
        }
    }


    static createCouche(firstDiv,coucheInfo)
    {
        /**
         * Map un tableau pour créer les differentes couches
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

}