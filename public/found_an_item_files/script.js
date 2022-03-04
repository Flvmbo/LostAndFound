      // let form = document.querySelector('form');
      // form.addEventListener('submit', (e)=>{
      //   e.preventDefault();
      // })      
      
      var dropRegion = document.getElementById("dropRegion");
        var image1 = document.getElementById('image1')
        var clear = document.getElementById('clear');
        dropRegion.addEventListener("click", function(){
          image1.click();
        });

        image1.addEventListener("change", function () {
         checkValue(this);
        });

        function checkValue(input){
          const previewImage = document.querySelector('.preview-img1');
          const previewDefaultText = document.querySelector('.preview-default-text1');
          var upload_pic1 = document.querySelector('.upload_pic1');
          const format = document.getElementById('format')                      
          var files = input.files;
          if(!input.value){
            previewImage.setAttribute("src", "");
            previewDefaultText.style.display = "block";  
            format.style.display = "block";           
            upload_pic1.style.display = "block";
            previewImage.style.display = "none";
          }
          if(input.value){  
            handleFiles(files);
          }
        }


        function handleFiles(files){
            if(validateImage(files[0])){
              previewImage(files[0]);
          }
        }
        
        function validateImage(image){
            // check type of file
            var validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if(validTypes.indexOf(image.type) == -1){
              const format = document.getElementById('format');
              format.innerHTML = `Invalid Type<br> Acceptable Formats are: PNG, JPEG, JPG`;
              image1.value = "";
              checkValue(image1);
              return false;
            }
            // check the size of file, Im not sure if this is needed
            var maxSizeInBytes = 10e6;//10MB
            if(image.size > maxSizeInBytes){
              alert("File too large");
              image1.value = "";
              checkValue(image1);
              return false;
            }
            return true;
          }

        // preview image before uploading
        function previewImage(image){
            const previewContainer = document.getElementById("dropRegion");
            const previewImage = document.querySelector('.preview-img1');
            const previewDefaultText = document.querySelector('.preview-default-text1');
            var upload_pic1 = document.querySelector('.upload_pic1');
            const format = document.getElementById('format');
            previewDefaultText.style.display = "none";
            format.innerHTML = `Acceptable Formats: PNG, JPEG, JPG`;
            format.style.display = "none";
            upload_pic1.style.display = "none";
            previewImage.style.display = "block";
            let reader = new FileReader();
             reader.addEventListener("load", function(){
                previewImage.setAttribute("src", this.result);
              })
              reader.readAsDataURL(image);
        }

        
            // var my_cont = document.getElementById("dropRegion");
            //   var my_image = document.querySelector('.preview-image1');
         
          
        function preventDefault(e){
          e.preventDefault();
          e.stopPropagation();
        }
    
        function handleDrop(e){
            var data = e.dataTransfer,
          // e.dataTransfer contains the dragged data
            files = data.files;
            image1.files = data.files
            handleFiles(files);
        }
      
        dropRegion.addEventListener("dragenter", preventDefault, false);
        dropRegion.addEventListener("dragleave", preventDefault, false);
        dropRegion.addEventListener("dragover", preventDefault, false);
        dropRegion.addEventListener("drop", preventDefault, false);
        dropRegion.addEventListener("drop", handleDrop, false);




        










        var dropRegion2 = document.getElementById("dropRegion2");
        var image2 = document.getElementById('image2')
      //  var clear = document.getElementById('clear');
        dropRegion2.addEventListener("click", function(){
          image2.click();
        });


        image2.addEventListener("change", function () {
         checkValue2(this);
        });
        function checkValue2(input){
          const previewImage2 = document.querySelector('.preview-img2');
          const previewDefaultText2 = document.querySelector('.preview-default-text2');
          var upload_pic2 = document.querySelector('.upload_pic2');
          const format2 = document.getElementById('format2')                      
          var files = input.files;
          if(!input.value){
              previewImage2.setAttribute("src", "");
              previewDefaultText2.style.display = "block";
              format2.style.display = "block";           
              upload_pic2.style.display = "block";
              previewImage2.style.display = "none";
          }
          if(input.value){  
          handleFiles2(files);
          }
        }

        function handleFiles2(files){
            if(validateImage2(files[0])){

              previewImage2(files[0]);
          }
        }
        
        function validateImage2(image){
            // check type of file
            var validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if(validTypes.indexOf(image.type) == -1){
              const format2 = document.getElementById('format2');
              format2.innerHTML = `Invalid Type<br> Acceptable Formats are: PNG, JPEG, JPG`;
              image2.value = "";
              checkValue2(image2);
              return false;
            }
            // check the size of file, Im not sure if this is needed
            var maxSizeInBytes = 10e6;//10MB
            if(image.size > maxSizeInBytes){
              alert("File too large");
              image2.value = "";
              checkValue2(image2);
              return false;
            }
           
            return true;
          }

        // preview image before uploading
        function previewImage2(image){
            const previewContainer2 = document.getElementById("dropRegion2");
            const previewImage2 = document.querySelector('.preview-img2');
            const previewDefaultText2 = document.querySelector('.preview-default-text2');
            var upload_pic2 = document.querySelector('.upload_pic2');
            const format2 = document.getElementById('format2');
            format2.innerHTML = `Acceptable Formats: PNG, JPEG, JPG`;
            format2.style.display = "none";
            previewDefaultText2.style.display = "none";
            upload_pic2.style.display = "none";
            previewImage2.style.display = "block";
            let reader2 = new FileReader();
             reader2.addEventListener("load", function(){
                previewImage2.setAttribute("src", this.result);
              })
              reader2.readAsDataURL(image);
        }

        
            // var my_cont = document.getElementById("dropRegion2");
            //   var my_image = document.querySelector('.preview-image2');
         
          
        function preventDefault2(e){
          e.preventDefault();
          e.stopPropagation();
        }
    
        function handleDrop2(e){
            var data = e.dataTransfer,
          // e.dataTransfer contains the dragged data
            files = data.files;
            image2.files = data.files
            handleFiles2(files);
        }
      
        dropRegion2.addEventListener("dragenter", preventDefault2, false);
        dropRegion2.addEventListener("dragleave", preventDefault2, false);
        dropRegion2.addEventListener("dragover", preventDefault2, false);
        dropRegion2.addEventListener("drop", preventDefault2, false);
        dropRegion2.addEventListener("drop", handleDrop2, false);
