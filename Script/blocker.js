         var screenSizeIn = screen.width + " X " +
         screen.height;
         
         console.log("Screen size is: " + screenSizeIn);
         if (screenSizeIn == "1920 X 1080") { // <-- good screen size
         console.log("Screen size is good!");
         } else { // <-- bad screen size
         window.location = "/blocked.html"; // <-- what to do when wrong
         console.log("Screen size is wrong!");
         }
