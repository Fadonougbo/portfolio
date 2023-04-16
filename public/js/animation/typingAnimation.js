

export const typingAnimation=()=>
{
    const element=document.querySelector(".typing")

    const content="Bienvenue sur mon portfolio."

    const splitElement=content.split(" ")

    const interval=setInterval(()=>{

        element.innerHTML+=` ${splitElement.shift()}`

        if(splitElement.length===0)
        {
            clearInterval(interval)
        }

    },500)

}