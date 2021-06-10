
var images = [
    "pop.jpeg",
    "mom.jpeg",
    "sis.jpeg",
    "bruno.jpeg",
    "me.jpeg"
    ];
    
    var i = 0;
    function nextslide() { 
     
       if(i == 5)
         {
           i=0;
         }
       
        document.getElementById("album").src = images[i];
      i++;
     
    }
    
    
    