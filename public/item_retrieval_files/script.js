let form = document.querySelector('form');
let submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (e)=>{
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const admin = form.admin.value;
    const location = form.location.value;
    const idphoto = form.querySelector('#idphoto');
    const info = document.querySelector('.info');
    info.style.display =  "<%= info.error %>"; 
    info.textContent  = "<%= info.display  %>"

    if(firstname == "" || lastname == "" || admin == "" || location == ""){
        info.style.display = "block";
        info.textContent = "Enter values to empty fields";
    }else{
        if(!idphoto.value){
            info.style.display = "block";
            info.textContent = "Image is required";
        }
        else{
              try{
                  submitButton.type = "submit";
                  info.style.display =  "<%= info.error %>"; 
                  info.textContent  = "<%= info.display  %>"              
              }catch(e){
                console.log(e.message)
              }
          }
    }
})


var dropRegion = document.getElementById("dropRegion");
var myinput = document.getElementById('idphoto')
var clear = document.getElementById('clear');
dropRegion.addEventListener("click", function () {
  myinput.click();
});
myinput.addEventListener("change", function () {
  checkValue(this);
});

function checkValue(input){
  const previewContainer = document.getElementById("dropRegion");
  const previewImage = previewContainer.querySelector('.image-preview__image');
  const previewDefaultText = previewContainer.querySelector('.image-preview__default-text');
  const format = document.getElementById('format')
  const maxSize = document.getElementById('maxSize');                   
  var files = input.files;
  var upload_pic1 = document.querySelector('.upload_pic1');
  if(!input.value){
    previewImage.setAttribute("src", "");
    previewDefaultText.style.display = "block";
    format.style.display = "block";
    maxSize.style.display = "block"      
    upload_pic1.style.display = "block";
    previewImage.style.display = "none";
  }
  if(input.value){  
  handleFiles(files);
  }
}
function preventDefault(e) {
  e.preventDefault();
  e.stopPropagation();
}
dropRegion.addEventListener("dragenter", preventDefault, false);
dropRegion.addEventListener("dragleave", preventDefault, false);
dropRegion.addEventListener("dragover", preventDefault, false);
dropRegion.addEventListener("drop", preventDefault, false);
function handleDrop(e) {
  var data = e.dataTransfer,
    // e.dataTransfer contains the dragged data
    files = data.files;
  myinput.files = data.files
  handleFiles(files);
}
dropRegion.addEventListener("drop", handleDrop, false);

function handleFiles(files) {

    if(files.length==1){
        if (validateImage(files[0])) {
            previewTheImage(files[0]);
          }
    }
    else{
        myinput.value = "";
        checkValue(myinput);
    }
  
}
function validateImage(image) {
  // check type of file
  var validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (validTypes.indexOf(image.type) == -1) {
    const format = document.getElementById('format');
    format.innerHTML = `Invalid Type<br> Acceptable Formats are: PNG, JPEG, JPG`;
    myinput.value = "";
    checkValue(myinput);
    return false;
  }
  // check the size of file, Im not sure if this is needed
  var maxSizeInBytes = 5000000//10MB
  if (image.size > maxSizeInBytes) {
    const maxSize = document.getElementById('maxSize');                   
    maxSize.innerHTML = `Cannot upload image with size greater than 5mb`      
    myinput.value = "";
    checkValue(myinput);
    return false; 
  }

  return true;
}
// preview image before uploading
function previewTheImage(image) {
  const previewContainer = document.getElementById("dropRegion");
  const previewImage = previewContainer.querySelector('.image-preview__image');
  const previewDefaultText = previewContainer.querySelector('.image-preview__default-text');
  var upload_pic1 = document.querySelector('.upload_pic1');
  const format = document.getElementById('format');
  const maxSize = document.getElementById('maxSize');                   
  const reader = new FileReader();
  format.style.display = "none";
  format.innerHTML = `Acceptable Formats: PNG, JPEG, JPG`;
  maxSize.innerHTML = `Maximum upload size: 5mb`    
  maxSize.style.display = "none";
  previewDefaultText.style.display = "none";
  upload_pic1.style.display = "none";

  previewImage.style.display = "block";
  //    var my_cont = document.getElementById("dropRegion");
  //  var my_image = document.getElementById("my_image");

  reader.addEventListener("load", function () {
    previewImage.setAttribute("src", this.result);
  });
  reader.readAsDataURL(image);
}