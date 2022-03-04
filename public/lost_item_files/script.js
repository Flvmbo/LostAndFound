const body = document.querySelector('body');
const showFilter = document.querySelector('.show-filter');
// const filterContainer = document.querySelector('.mobile-filter-container');
const filterContainer = document.querySelector('.mobile-filter-div');
const filterBackground = document.querySelector('.mobile-filter-background')
const sliderImages = document.querySelectorAll('.image-container img');
const overallContainer = document.querySelector('.overall-container');
const mobileFilterExit = document.querySelector('.mobile-exit-btn');

showFilter.addEventListener('click', (e)=>{
    // filterContainer.style = "visibility:visible;left:0;right:0;overflow-y:scroll;";
    filterContainer.style = "transform:translate(-50%, 0%) scale(1);overflow-y:scroll;pointer-events:all";
    filterBackground.style = "display:block;"
    body.style.overflowY = "hidden";
})

mobileFilterExit.addEventListener('click', ()=>{
    filterContainer.style = "transform: translate(-50%, 0%) scale(0);overflow-y:hidden;pointer-events:none"
    body.style.overflowY = "auto";
    filterBackground.style = "display:none;"


})

filterBackground.addEventListener('click', ()=>{
    // filterContainer.style = "right:-100%;overflow-y:hidden;"
    filterContainer.style = "transform: translate(-50%, 0%) scale(0);overflow-y:hidden; pointer-events:none"
    body.style.overflowY = "auto";
    filterBackground.style = "display:none;"
})
//HOW TO MAKE IT SO THAT WHEN YOU CLICK ON THE BACKGROUND, IT WILL EX THE FILTER TOO (CURRENT STEP NOT WORKING PROPERLY)
// filterContainer.addEventListener('click', ()=>{
//     filterContainer.style = "right:-100%;overflow-y:hidden;"
//     body.style.overflowY = "scroll";
// })

// TO DO THE IMAGE SLIDER ANIMATION
const slideContainer = document.querySelector('.image-container');
const rightSlide = document.querySelectorAll('.next-image');
const leftSlide = document.querySelectorAll('.prev-image');
// let imagesize = slider.offsetWidth;
// let leftTouch = imagesize - 140;
// let rightTouch  = imagesize -10;

// slideContainer.addEventListener('click', (e)=>{
//     alert(this.clientX)
// })
// function changeWidth(event) {
    
//     let outerDiv = document.getElementById('outerDiv');
//     document.getElementById('innerDiv').style.width = event.clientX-outerDiv.offsetLeft+'px';
//   }

rightSlide.forEach((element)=>{
    element.addEventListener('click', ()=>{
    
        let imageAndSliderContainer = document.getElementById(element.parentElement.parentElement.id);
        // imageAndSliderContainer.style ='border:1px solid;';
        imageAndSliderContainer.classList.remove('circle-highlight')
        imageAndSliderContainer.classList.add('circle-highlightt');
        let rightSlideContainer = imageAndSliderContainer.children[2];
        let leftSlideContainer = imageAndSliderContainer.children[0];
        rightSlideContainer.style.opacity = '0';
        rightSlideContainer.style.pointerEvents = 'none';
        leftSlideContainer.style.opacity = '1';
        leftSlideContainer.style.pointerEvents = 'all';

        let imageContainer = imageAndSliderContainer.children[1];
        let leftImg = imageContainer.children[0];
        let rightImg = imageContainer.children[1];
        leftImg.style = 'transition:transform .5s ease-in-out'
        rightImg.style = 'transition:all .7s ease-in-out';
        leftImg.style.transformOrigin = 'left';
        leftImg.style.transform = 'scaleX(0)';
        rightImg.style.opacity = '1';

    })
})
leftSlide.forEach((element)=>{
    element.addEventListener('click', ()=>{
        let imageAndSliderContainer = document.getElementById(element.parentElement.parentElement.id);
        // imageAndSliderContainer.style ='border:1px solid;';
        imageAndSliderContainer.classList.remove('circle-highlightt')
        imageAndSliderContainer.classList.add('circle-highlight');
        let rightSlideContainer = imageAndSliderContainer.children[2];
        let leftSlideContainer = imageAndSliderContainer.children[0];
        rightSlideContainer.style.opacity = '1';
        rightSlideContainer.style.pointerEvents = 'all';
        leftSlideContainer.style.opacity = '0';
        leftSlideContainer.style.pointerEvents = 'none';

        let imageContainer = imageAndSliderContainer.children[1];
        let leftImg = imageContainer.children[0];
        let rightImg = imageContainer.children[1];
        rightImg.style = 'transition:all .25s ease-in';
        rightImg.style.opacity = '0';
        leftImg.style.transform = 'scaleX(1)';
    })
})

// TO SHOW ALL LOCATIONS OR SPECIFIC LOCATIONS
// const selectLocation = document.getElementById('specific-location');
const selectLocation = document.querySelector('#filter-container #specific-location')
var noChecked = false;

selectLocation.addEventListener('click', ()=>{
    // alert('hi')
    let showLocation = document.querySelector('#filter-container .select-location-true');
    const allLocations = document.querySelector('#filter-container #all-location');  
    showLocation.style.display = 'block';
    var count = 0;
    var checked = false;
    if(selectLocation.checked){
     let locationFilter = document.querySelectorAll('#filter-container .check');
     locationFilter[0].checked = true;
     locationFilter.forEach((location)=>{
        location.addEventListener('click', ()=>{
            for(let i = 0; i<locationFilter.length; i++){
                if(locationFilter[i].checked){
                    noChecked = false
                    break;
                }
                else{
                    noChecked = true;
                }
            }
            if(noChecked != false){
                showLocation.style.display = 'none';
                selectLocation.checked = false;
                allLocations.checked = true;
            }
        })
    })
    
    }
})
const allLocations = document.querySelector('#filter-container #all-location');
allLocations.addEventListener('click', ()=>{
    let showLocation = document.querySelector('#filter-container .select-location-true');
    showLocation.style.display = 'none';
    // anyChecked = false;
})
// TO SHOW DATE SELECT OR SORT BY MOST RECENT
const mostRecent = document.querySelector('#filter-container #most-recent');
mostRecent.addEventListener('click', ()=>{
    let selectDate = document.querySelector('#filter-container .select-date-true');
    selectDate.style.display = 'none';
})

const lookUpDate = document.querySelector('#filter-container #search-date');
lookUpDate.addEventListener('click', ()=>{
    let selectDate = document.querySelector('#filter-container .select-date-true');
    selectDate.style.display = 'block';
})


const mobileSelectLocation = document.querySelector('#mobile-filter-div #mobile-specific-location')
var mobileNoChecked = false;

mobileSelectLocation.addEventListener('click', ()=>{
    // alert('hi')
    let mobileShowLocation = document.querySelector('#mobile-filter-div .select-location-true');
    const mobileAllLocations = document.querySelector('#mobile-filter-div #mobile-all-location');  
    mobileShowLocation.style.display = 'block';
    var count = 0;
    var checked = false;
    if(mobileSelectLocation.checked){
     let locationFilter = document.querySelectorAll('#mobile-filter-div .check');
     locationFilter[0].checked = true;
     locationFilter.forEach((location)=>{
        location.addEventListener('click', ()=>{
            for(let i = 0; i<locationFilter.length; i++){
                if(locationFilter[i].checked){
                    mobileNoChecked = false
                    break;
                }
                else{
                    mobileNoChecked = true;
                }
            }
            if(mobileNoChecked != false){
                mobileShowLocation.style.display = 'none';
                mobileSelectLocation.checked = false;
                mobileAllLocations.checked = true;
            }
        })
    })
    
    }
})
const mobileAllLocations = document.querySelector('#mobile-filter-div #mobile-all-location');
mobileAllLocations.addEventListener('click', ()=>{
    let mobileShowLocation = document.querySelector('#mobile-filter-div .select-location-true');
    mobileShowLocation.style.display = 'none';
    // anyChecked = false;
})
// TO SHOW DATE SELECT OR SORT BY MOST RECENT
const mobileMostRecent = document.querySelector('#mobile-filter-div #mobile-most-recent');
mobileMostRecent.addEventListener('click', ()=>{
    let selectDate = document.querySelector('#mobile-filter-div .select-date-true');
    selectDate.style.display = 'none';
})

const mobileLookUpDate = document.querySelector('#mobile-filter-div #mobile-search-date');
mobileLookUpDate.addEventListener('click', ()=>{
    let selectDate = document.querySelector('#mobile-filter-div .select-date-true');
    selectDate.style.display = 'block';
})


// leftSlide.addEventListener('click', (e)=>{
//     imageAndSliderContainer.classList.remove('circle-highlightt')
//     imageAndSliderContainer.classList.add('circle-highlight');
//     rightSlideContainer.style.opacity = '1';
//     rightSlideContainer.style.pointerEvents = 'all';
//     leftSlideContainer.style.opacity = '0';
//     leftSlideContainer.style.pointerEvents = 'none';
//     // rightImg.style.width = '0';
//     // leftImg.style.width = '100%';
//     rightImg.style = 'transition:all .4s ease-in';
//     // rightImg.style.transform = 'scaleX(0)';
//     rightImg.style.opacity = '0';
//     leftImg.style.transform = 'scaleX(1)';
    
    
// })


// rightSlide.addEventListener('click', (e)=>{
   
//     imageAndSliderContainer.classList.remove('circle-highlight')
//     imageAndSliderContainer.classList.add('circle-highlightt');
//     rightSlideContainer.style.opacity = '0';
//     rightSlideContainer.style.pointerEvents = 'none';
//     leftSlideContainer.style.opacity = '1';
//     leftSlideContainer.style.pointerEvents = 'all';
//     // // leftImg.style.width = '0';
//     // // rightImg.style.width = '100%';
//     // imageContainer.style = 'transition:all 1s ease-in-out'
//     leftImg.style = 'transition:transform .5s ease-in-out'
//     rightImg.style = 'transition:all .7s ease-in-out';
//     leftImg.style.transformOrigin = 'left';
//     // rightImg.style.transformOrigin = 'right';
//     leftImg.style.transform = 'scaleX(0)';
//     rightImg.style.opacity = '1';
//     // leftImg.style.width = '0'
//     // rightImg.style = 'transform:scaleX(1);pointer-events:all;opacity:1';0

//     // leftImg.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     // rightImg.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    
// })


// // MENU BAR FOR MOBILE
// const menuDiv = document.querySelector('.menu-bar')
// const hamburger = document.querySelector('.hamburger')
// menuDiv.addEventListener('click', ()=>{
//     // alert('hi');
//     hamburger.style.display = 'none'
//     menuDiv.style = "position:absolute;top:0; bottom:0; left:0; right:0; background-color:blue; opacity:.3; overflow:hidden"
// })


let docElem = document.documentElement;
// let body = document.querySelector('body')
let toTop = document.querySelector('.to-top');
let noItem = document.querySelector('#item-not-found-div')
let offset = 100;
let scrollPos, docheight;
docheight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
var setMiniUpdateVisible = false;
window.addEventListener('scroll', (event)=>{
    if(docheight != undefined){
        offset = docheight/4;
    }

    scrollPos =  body.scrollTop || docElem.scrollTop

    if(scrollPos > offset)
    { 
        toTop.style.visibility = "visible";

    }
    else{
    toTop.style.visibility = "hidden"
    }

    setVisible(scrollPos, offset);
   
})

const exitItemNotFound = document.querySelector('#exit-item-not-found');

exitItemNotFound.addEventListener('click', ()=>{
    //To open the mini stuff
    if(noItem.style.right == "-100%"){
        setMiniUpdateVisible = false;
        noItem.style = "right:0%;visibility:visible"
    }
    else{
        //To close the mini stuff
        setMiniUpdateVisible = true;
         noItem.style = "right:-100%;visibility:visible"
    }
})

function setVisible(scrollPos, offset){
    if (scrollPos > (offset + 300)){
        if(!setMiniUpdateVisible){
            noItem.style = "right:0%; visibility:visible";
        }
        else{
            noItem.style = "right:-100%;visibility:visible";
        }
    }
    else{
        noItem.style = "right:-100%;visibility:hidden";2
    }
}



// slider.addEventListener('touchend', e => {
//     alert('msg');
//   touchendX = e.changedTouches[0].screenX
//   handleGesture()
// })


// if (document.readyState === "loading"){
//     // alert('hi');
//     overallContainer.classList.add('body')
// }