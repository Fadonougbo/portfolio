
const observer=new IntersectionObserver((elementList)=>
{

    elementList.forEach((el)=>
    {
        if(el.isIntersecting)
        {
            el.target.classList.add("add_width")

            observer.unobserve(el.target)
        }
    })
        
},{
    threshold:[1]
})

export function startTitleObserver()
{
    const titles=document.querySelectorAll("h3")
     const spreadTitles=[...titles]

     spreadTitles.map((el)=>
     {
        observer.observe(el)
     })

}

