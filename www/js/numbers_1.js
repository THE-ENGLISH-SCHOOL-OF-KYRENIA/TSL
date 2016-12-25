$(document).ready(function(){
  
    setInterval(function(){ //check for the value of the chosen number and refresh respectively
    if(number==0){
      $(".gestures img").attr("src","../../images/gestures/O.jpg"); //O letter and 0 are basically the same gesture :D
    }
     
    else if(number==7 || number==8){ 
      current_image = $(".gestures img").attr("src");
       if(current_image.indexOf("a.jpg") != -1 ){
         $(".gestures img").attr("src","../../images/gestures/numbers/"+number+"b.jpg");
       }
       else{
         $(".gestures img").attr("src","../../images/gestures/numbers/"+number+"a.jpg")
       }
    }
    
    else if(number == 10){
       current_image = $(".gestures img").attr("src");
       if(current_image.indexOf("a.jpg") != -1 ){
         $(".gestures img").attr("src","../../images/gestures/numbers/"+number+"c.jpg");
       }
        
       else{
         $(".gestures img").attr("src","../../images/gestures/numbers/"+number+"a.jpg")
       }
    }
     
    
    else{
      $(".gestures img").attr("src","../../images/gestures/numbers/"+number+".jpg");
    }
        
        
        
    }, 1500);
    
});