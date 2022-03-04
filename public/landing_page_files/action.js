// var count = 1
// var margin = 0
// var mP = 0
// function changeSlide()
// {
    
//     var slide = document.getElementsByClassName("current-item")[0]
//     slide.style.marginLeft = `calc(${margin}rem - ${mP}%) `
//     margin-=42
//     mP +=5
//     count++
//     if(count > 3)
//     {
//         count = 1
//         margin = 0
//         mP=0
//     }
// }

// setInterval(changeSlide,3000)



var aboutUsHeader = document.querySelectorAll('.about-header')
var aboutText = document.querySelectorAll('.about-desc')
let adminSection = document.querySelector('.admin-section-info')
let hhsAdmin = document.querySelector('.hhs-admin')
let adminYarns = document.querySelector('.admin-text-container')
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
  aboutText.forEach(element => {

      observer.observe(element)
  })
  observer.observe(adminSection)
  observer.observe(adminPic)
  observer.observe(hhsAdmin)
  observer.observe(arBtn)
//   observer.observe(adminYarns)




// const hamburger = document.querySelector('.hamburger')
// const mobileMenu = document.querySelector('.mobile-menu-container')

// //
// const dividingLine =  document.getElementById('dividingline')
// const mobileLeft =  document.getElementById('mobileLeft')
// const mobileRight =  document.getElementById('mobileRight')

// const hamburgerCloseDiv = document.getElementById("hamburgerCloseDiv")
// const closee = document.getElementById("close")

// hamburger.addEventListener('click',function(e)
// {
//     hamburgerCloseDiv.style.display = "block"
//     mobileMenu.classList.toggle('mobile-opened')
//     hamburger.style.position = "absolute"


//     if(document.body.style.overflowY == 'hidden')
//     {   document.body.style.overflowY = 'auto' }
//     else
//     {
//         document.body.style.overflowY = 'hidden'
//     }
// })


// closee.addEventListener("click",()=>{
//     hamburgerCloseDiv.style.display = "none"
//     mobileMenu.classList.toggle('mobile-opened')
//     hamburger.style.position = "relative"
//     if(document.body.style.overflowY == 'hidden')
//     {   document.body.style.overflowY = 'auto' }
//     else
//     {
//         document.body.style.overflowY = 'hidden'
//     }
// })