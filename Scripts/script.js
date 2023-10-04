$(document).ready(function() {
  
    
    const myDataArrayOfObjects = [
       {
       show: "Our Flag Means Death",
         status: "Waiting on Season 2!!!"
        },
       {
        show: "Good Omens",
         venue: "Amazon prime!"
         },
      {
        show: "The Good Place",
        notes: "I need to rewatch this"
         }
      ];
    
      
     $.each(myDataArrayOfObjects, (index, item) => {
       
       $('#fave').append("<li>" + item.show + "</li>");
       
     
       
     })
      
    
    
    });