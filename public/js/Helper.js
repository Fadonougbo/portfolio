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

    /**
     * Position qui permet au main et au footer de bouger
     * Deplace le main et le footer de la largeur du aside sur grand ecrand
     */
   static setPos()
    {
        const aside=document.querySelector("aside")
        const footer=document.querySelector("footer")
        const main=document.querySelector("main")

        const asideWidth=aside.offsetWidth
        

        main.style.setProperty("transform",`translateX(${asideWidth}px)`)
        footer.style.setProperty("transform",`translateX(${asideWidth}px)`)
        
    }

    /**
     * Ramène le main et le footer à la position initiale et
     * cache le aside
     */
    static removePos()
    {
        const aside=document.querySelector("aside")
        const main=document.querySelector("main")
        const footer=document.querySelector("footer")

        main.style.setProperty("transform",`translateX(0)`)
        footer.style.setProperty("transform",`translateX(0)`)

        aside.style.setProperty("z-index","-1")
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
        const main=document.querySelector("main")
        globaleContainer.classList.toggle("move")
        

        const add_Zindex_In_Aside=()=>{
            aside.style.setProperty("z-index","1")
        }

        const remove_Zindex_In_Aside=()=>{
            aside.style.setProperty("z-index","-1")
        }


        if (globaleContainer.classList.contains("move")) 
        {   

            this.setPos()

            /**
             * Affiche le aside après la transformation du main
             */
            main.addEventListener("transitionend",add_Zindex_In_Aside,{once:true})

            const onResize=()=>{

                if(window.innerWidth>=1023)
                {   
                    this.setPos()
                }else
                {
                    this.setPos()
                }
            }

            window.addEventListener("resize",throttle(onResize,300) ) 

        }else 
        {   
            /**
             * Cache le aside et ramène le main et le footer à position 0 sur petie ecrand
             */
            this.removePos()
            /**
             * ajoute le z-index de force a l'aside lorsquon 
             */
            main.addEventListener("transitionend",remove_Zindex_In_Aside,{once:true})

            const onResize=()=>{

                if(window.innerWidth>=1023)
                {   
                    /**
                     * Rend visible le aside sur grand ecrand
                     */
                    aside.style.setProperty("z-index","1")
                }else
                {   
                    /**
                     * Cache le aside et ramène le main et le footer à position 0 sur petie ecrand
                     */
                    this.removePos();
                }
            }

            window.addEventListener("resize",throttle(onResize,300) )
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