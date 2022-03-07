var hamburger = document.querySelector('.hamburger')
var mobileMenu =document.querySelector('.mobile-menu-container')
var dividingLine =  document.getElementById('dividingline')
var mobileLeft=  document.getElementById('mobileLeft')
var mobileRight=  document.getElementById('mobileRight')
var hamburgerCloseDiv = document.getElementById("hamburgerCloseDiv")
var closee = document.getElementById("close")

hamburger.addEventListener('click',function(e)
{
    hamburgerCloseDiv.style.display = "block"
    mobileMenu.classList.toggle('mobile-opened')
    hamburger.style.position = "absolute"


    if(document.body.style.overflowY == 'hidden')
    {   document.body.style.overflowY = 'auto' }
    else
    {
        document.body.style.overflowY = 'hidden'
    }
})


closee.addEventListener("click",()=>{
    hamburgerCloseDiv.style.display = "none"
    mobileMenu.classList.toggle('mobile-opened')
    hamburger.style.position = "relative"
    if(document.body.style.overflowY == 'hidden')
    {   document.body.style.overflowY = 'auto' }
    else
    {
        document.body.style.overflowY = 'hidden'
    }
})