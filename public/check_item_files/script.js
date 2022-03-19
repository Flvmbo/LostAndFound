const body = document.querySelector('body');
const showFilter = document.querySelector('.show-filter');
// const filterContainer = document.querySelector('.mobile-filter-container');
const filterContainer = document.querySelector('.mobile-filter-div');
const filterBackground = document.querySelector('.mobile-filter-background')
const sliderImages = document.querySelectorAll('.image-container img');

//HOW TO MAKE IT SO THAT WHEN YOU CLICK ON THE BACKGROUND, IT WILL EX THE FILTER TOO (CURRENT STEP NOT WORKING PROPERLY)
// filterContainer.addEventListener('click', ()=>{
//     filterContainer.style = "right:-100%;overflow-y:hidden;"
//     body.style.overflowY = "scroll";
// })

// TO DO THE IMAGE SLIDER ANIMATION
const slideContainer = document.querySelector('.image-container');
const rightSlide = document.querySelectorAll('.next-image');
const leftSlide = document.querySelectorAll('.prev-image');
const slideLeft = document.querySelectorAll('.prev');
const slideRight = document.querySelectorAll('.next');

rightSlide.forEach((element) => {
    element.addEventListener('click', () => {

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
slideRight.forEach((element) => {
    element.addEventListener('click', () => {

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
leftSlide.forEach((element) => {
    element.addEventListener('click', () => {
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

slideLeft.forEach((element) => {
    element.addEventListener('click', () => {
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