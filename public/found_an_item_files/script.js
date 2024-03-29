        let form = document.querySelector('form');
        let submitButton = document.querySelector('.submit_button');
        submitButton.addEventListener('click', (e)=>{
          const itemName = form.item_name.value;
          const category = form.Category.value;
          const description = form.Description.value;
          const location = form.Location.value;
          const info = document.querySelector('.info');
          const firstImage = form.querySelector('#image1');
          const secondImage = form.querySelector('#image2');

          // const formData = new FormData();
    
          // // const fileField = document.querySelector('input[type="file"]');
          
          // // formData.append('username', 'abc123');
          // formData.append('image', firstImage.files[0]);
          // formData.append('image', secondImage.files[0]);
          // formData.append('Category', category)
          // formData.append('Description', description)
          // formData.append('Location', location)
          // formData.append('item_name', itemName)

          if(itemName == "" || description == "" || location == "" || category=="N/A"){
            info.style.display = "block";
            info.textContent = "Enter values to empty fields";
            }
          else{
              if(!firstImage.value || !secondImage.value){
                info.style.display = "block";
                info.textContent = "Both images are required";
              }
              else{
                console.log(firstImage.files[0])
                  try{
                      submitButton.type = "submit";
                  }catch(e){
                    console.log(e.message)
                  }
              }
            }
        })   

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
          const maxSize = document.getElementById('maxSize');                   
          var files = input.files;
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


        function handleFiles(files){
          if(files.length==1){
            if (validateImage(files[0])) {
                previewImage(files[0]);
              }
        }
        else{
            image1.value = "";
            checkValue(image1);
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
            var maxSizeInBytes = 5000000;//10MB
            if(image.size > maxSizeInBytes){
              const maxSize = document.getElementById('maxSize');                   
              maxSize.innerHTML = `Cannot upload image with size greater than 5mb`      
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
            const maxSize = document.getElementById('maxSize');                   
            previewDefaultText.style.display = "none";
            format.innerHTML = `Acceptable Formats: PNG, JPEG, JPG`;
            format.style.display = "none";
            maxSize.innerHTML = `Maximum upload size: 5mb`    
            maxSize.style.display = "none";
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
          const maxSize2 = document.getElementById('maxSize2');                                     
          var files = input.files;
          if(!input.value){
              previewImage2.setAttribute("src", "");
              previewDefaultText2.style.display = "block";
              format2.style.display = "block";           
              maxSize2.style.display = "block"      
              upload_pic2.style.display = "block";
              previewImage2.style.display = "none";
          }
          if(input.value){  
          handleFiles2(files);
          }
        }

        function handleFiles2(files){
          if(files.length==1){
            if (validateImage2(files[0])) {
                previewImage2(files[0]);
              }
        }
        else{
            image2.value = "";
            checkValue2(image2);
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
            var maxSizeInBytes = 5000000;//10MB
            if(image.size > maxSizeInBytes){
              const maxSize2 = document.getElementById('maxSize2');  
              maxSize2.innerHTML = `Cannot upload image with size greater than 5mb`      
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
            const maxSize2 = document.getElementById('maxSize2');                   
            format2.innerHTML = `Acceptable Formats: PNG, JPEG, JPG`;
            format2.style.display = "none";
            maxSize2.innerHTML = `Maximum upload size: 5mb`    
            maxSize2.style.display = "none";
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
