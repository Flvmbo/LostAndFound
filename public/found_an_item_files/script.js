var dropRegion = document.getElementById("dropRegion");
        var image1 = document.getElementById('image1')
        var clear = document.getElementById('clear');
        dropRegion.addEventListener("click", function(){
          image1.click();
        });

        image1.addEventListener("change", function(){
          var files = image1.files;
          console.log(files)
          handleFiles(files);
        });

        function handleFiles(files){
            if(validateImage(files[0])){
              previewImage(files[0]);
          }
        }
        
        function validateImage(image){
            // check type of file
            var validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if(validTypes.indexOf(image.type) == -1){
              alert("Invalid File Type");
              return false;
            }
            // check the size of file, Im not sure if this is needed
            var maxSizeInBytes = 10e6;//10MB
            if(image.size > maxSizeInBytes){
              alert("File too large");
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
            previewDefaultText.style.display = "none";
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

        image2.addEventListener("change", function(){
          var files = image2.files;
          console.log(files)
          handleFiles2(files);
        });

        function handleFiles2(files){
            if(validateImage2(files[0])){
              previewImage2(files[0]);
          }
        }
        
        function validateImage2(image){
            // check type of file
            var validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if(validTypes.indexOf(image.type) == -1){
              alert("Invalid File Type");
              return false;
            }
            // check the size of file, Im not sure if this is needed
            var maxSizeInBytes = 10e6;//10MB
            if(image.size > maxSizeInBytes){
              alert("File too large");
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