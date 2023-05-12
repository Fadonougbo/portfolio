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

        const tsl='20%'
        
        const footer=document.querySelector("footer")
        const main=document.querySelector("main")
        
        main.style.setProperty("transform",`translateX(${tsl})`)
        footer.style.setProperty("transform",`translateX(${tsl})`)

        //20% car le aside fait 17%
        //donc 17% +3%
        
    }

    /**
     * Ramène le main et le footer à la position initiale et
     * cache le aside
     */
    static removePos()
    {
        const main=document.querySelector("main")
        const footer=document.querySelector("footer")

        main.style.setProperty("transform",`translateX(0)`)
        footer.style.setProperty("transform",`translateX(0)`)
    }


    static openRideauMenu()
    {
        const aside=document.querySelector("aside")

        aside.classList.toggle("openMenu")
        
    }

    static closeRideauMenu()
    {
        const aside=document.querySelector("aside")

        //Menu burger
        let wrapperMenu =document.querySelector('.wrapper-menu');

        if(aside.classList.contains("openMenu"))
        {
            aside.classList.remove("openMenu")
            wrapperMenu.classList.remove("open")
        }
    }


    /**
     * 
     * Active le menu
     * @param {HTMLElement} globaleContainer 
     */
    static translateMain(globaleContainer)
    {
        globaleContainer.classList.toggle("move")

        this.openRideauMenu()

        if (globaleContainer.classList.contains("move")) 
        {   
            const onResize=()=>{

                if(window.innerWidth>=1023)
                {   
                    this.closeRideauMenu()
                    this.setPos()
                }else 
                {
                    this.removePos()
                }
            }

            window.addEventListener("resize",throttle(onResize,180) ) 

        }else 
        {   
            /**
             * Cache le aside et ramène le main et le footer à position 0 sur petie ecrand
             */
            //this.removePos()
            /**
             * ajoute le z-index de force a l'aside lorsquon 
             */
            //main.addEventListener("transitionend",remove_Zindex_In_Aside,{once:true})

            /* const onResize=()=>{

                if(window.innerWidth>=1023)
                { */   
                    /**
                     * Rend visible le aside sur grand ecrand
                     */
                /*     aside.style.setProperty("z-index","1")
                }else
                { */   
                    /**
                     * Cache le aside et ramène le main et le footer à position 0 sur petie ecrand
                     */
                    /* this.removePos();
                }
            }

            window.addEventListener("resize",throttle(onResize,300) ) */
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