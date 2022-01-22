var button = document.querySelector(".button");
var list = document.querySelector(".nav_container");
var docElem = document.documentElement;
var body = document.querySelector("body");

var docwidth = Math.max(body.scrollWidth, body.offsetWidth, docElem.clientWidth, docElem.scrollWidth, docElem.offsetWidth);
var browserWidth = body.clientWidth
// alert(browserWidth)
body.onresize=()=>{
    if(docwidth >=800)
    {
        list.style.display = "flex"
    }
}


    button.addEventListener("click", function(){
    
        if(list.style.display == "flex")
        {
            list.style.display = "none"
        }
        else{
            list.style.display = "flex"
        }
        
    })

