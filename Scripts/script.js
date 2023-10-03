$(document).ready(function() {
  
    //   here is an array of objects. Each array item is an object.
    const myDataArrayOfObjects = [
       {
       show: "Our Flag Means Death",
    
        },
       {
        show: "What We Do In the Shadows",
    
         },
      {
        show: "The Good Place",
        
         }
      ];
    
      
      $.each(myDataArrayOfObjects, (index, item) => {
   
        $('#faveStuff').append("<li>" + item.show + "</li>");
        
      
        
      })
     
    $('#faveStuff').append( myDataArrayOfObjects[0].status); 
    
    });