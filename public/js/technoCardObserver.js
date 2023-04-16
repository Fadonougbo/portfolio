const observer=new IntersectionObserver((elementList)=>
{

    elementList.forEach((el)=>
    {
        if(el.isIntersecting)
        {
            const children=[...el.target.children]

            children.forEach((el,key)=>
            {
                if(key%2===0)
                {
                    el.classList.add("bounce_in_left")
                    
                }else 
                {
                    el.classList.add("bounce_in_right")
                }

                el.style.animationDelay=`${key*0.2}s`

                observer.unobserve(el.parentElement)

                
            })
        }
       
    })
        
},{
    threshold:[0.5]
})

export function startCardObserver()
{
    const titles=document.querySelectorAll(".techno_cards")
     const spreadTitles=[...titles]

     spreadTitles.map((el)=>
     {
        observer.observe(el)
     })

}