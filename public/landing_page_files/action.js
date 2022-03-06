
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
  // observer.observe(adminPic)
  // observer.observe(hhsAdmin)
  // observer.observe(arBtn)
//   observer.observe(adminYarns)