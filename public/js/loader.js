
export const loadAnimation=()=>{

    const onLoad=()=>{
        const loader=document.querySelector("#loader")
        loader.classList.remove("load")
        loader.style.display="none"
    }
    
    window.addEventListener("load",onLoad)
}

loadAnimation()