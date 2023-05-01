
export const loadAnimation=()=>{

    document.body.style.setProperty("overflow","hidden")
    const onLoad=()=>{

        const loader=document.querySelector("#loader")
        loader.classList.remove("load")
        loader.style.display="none"
        document.body.style.setProperty("overflow","")
    }
    
    window.addEventListener("load",onLoad)
}

loadAnimation()