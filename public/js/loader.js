
export const loadAnimation=()=>{

    const onLoad=()=>{
        const loader=document.querySelector("#loader")
        loader.classList.remove("load")
    }
    
    window.addEventListener("load",onLoad)
}

loadAnimation()