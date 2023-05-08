const count=document.querySelector(".count")
const reddot=document.querySelectorAll(".dotted")
const notification=document.querySelectorAll(".dot")
const button=document.querySelector("button")
const chess=document.querySelectorAll(".chess")

button.addEventListener("click",(event)=>{
    event.preventDefault()
    for(let i=0;i<3;i++){
        notification[i].style.backgroundColor="revert"
        reddot[i].style.display="none"
    }
    count.style.display="none"
})

chess[0].addEventListener("mouseover",(event)=>{
    chess[1].style.color="hsl(219, 12%, 42%)"
})

chess[0].addEventListener("mouseout",(event)=>{
    chess[1].style.color="hsl(219, 85%, 26%)"
})