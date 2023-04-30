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
        aside.style.setProperty("margin-top",`${headerHeight}px`)
    }

   static setPos()
    {
        const aside=document.querySelector("aside")

        const asideWidth=aside.offsetWidth
        const main=document.querySelector("main")
        const footer=document.querySelector("footer")

        main.style.setProperty("transform",`translateX(${asideWidth}px)`)
        footer.style.setProperty("transform",`translateX(${asideWidth}px)`)
        
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
        const main=document.querySelector("main")
        const footer=document.querySelector("footer")

        const add_Zindex_In_Aside=()=>{
                aside.style.setProperty("z-index","1")
        }


        if (globaleContainer.classList.contains("move")) 
        {
            this.setPos()
            main.addEventListener("transitionend",add_Zindex_In_Aside,{once:true})

            const onResize=()=>{

                if(window.innerWidth>=1023)
                {
                    main.style.setProperty("transform",`translateX(14%)`)
                    footer.style.setProperty("transform",`translateX(14%)`)
                    
                }else
                {
                    this.setPos()
                }
            }

            window.addEventListener("resize",throttle(onResize,350) ) 

        }else 
        {   
            main.style.setProperty("transform",`translateX(0)`)
            footer.style.setProperty("transform",`translateX(0)`)
            aside.style.setProperty("z-index","-1")

            const onResize=()=>{

                if(window.innerWidth>=1023)
                {
                    aside.style.setProperty("z-index","1")
                }else
                {
                    main.style.setProperty("transform",`translateX(0)`)
                    footer.style.setProperty("transform",`translateX(0)`)
                    aside.style.setProperty("z-index","-1")
                }
            }

            window.addEventListener("resize",throttle(onResize,350) )
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
                newDiv.innerHTML+=`<img src="${path}/${path}_${link}.svg" alt="logo" />`
            })

            /**
             * ajout des div au parent
             */
            firstDiv.appendChild(newDiv)
            
        })
    }

}