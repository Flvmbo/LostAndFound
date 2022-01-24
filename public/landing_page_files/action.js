var count = 1
var margin = 0
var mP = 0
function changeSlide()
{
    
    var slide = document.getElementsByClassName("current-item")[0]
    slide.style.marginLeft = `calc(${margin}rem - ${mP}%) `
    margin-=42
    mP +=5
    count++
    if(count > 3)
    {
        count = 1
        margin = 0
        mP=0
    }
}

setInterval(changeSlide,3000)



var aboutUsHeader = document.querySelectorAll('.abs')
let aboutUsText = document.querySelectorAll('.yes')
let adminPic = document.querySelector('.f-square2')
let hhsAdmin = document.querySelector('.hhs-admin')
let adminYarns = document.querySelector('.admin-yarns')
let arBtn = document.querySelector('.ar-btn')

var options = {
    threshold:0.5
}

const inViewCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { // define the event/property you want to use
        //do something with the element, in our case, add a class 
        entry.target.classList.add('inview'); 
        console.log(entry.target); 
     }
      else { 
        // OPTIONAL, in case you want to do something once the intersection is done
     }
    });
  }

  let observer = new IntersectionObserver(inViewCallback,options); 

  observer.observe(aboutUsHeader[0])
  observer.observe(aboutUsHeader[1])
  observer.observe(adminPic)
  observer.observe(hhsAdmin)
  observer.observe(arBtn)
  observer.observe(adminYarns)
  aboutUsText.forEach(element => {
      observer.observe(element)
  })




const newCursor = document.querySelector('.updatedCursor')


document.addEventListener('mousemove',function(e)
{
    var x = e.pageX
    var y = e.pageY

    newCursor.style.top = y + "px"
    newCursor.style.left = x + "px"
})

const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu-container')

hamburger.addEventListener('click',function(e)
{
    mobileMenu.classList.toggle('mobile-opened')
    if(document.body.style.overflowY == 'hidden')
    {   document.body.style.overflowY = 'auto' }
    else
    {
        document.body.style.overflowY = 'hidden'
    }
})



