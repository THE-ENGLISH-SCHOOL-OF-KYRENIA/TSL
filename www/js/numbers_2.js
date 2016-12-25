$(document).ready(function(){
   setInterval(function(){ //check for the value of the chosen number and refresh respectively
     if(number <=15 || number>=20 && number<=50 ){
       current_image = $(".gestures img").attr("src");
       if(current_image.indexOf("a.jpg") != -1 ){
         $(".gestures img").attr("src","../../images/gestures/numbers/"+number+"b.jpg");
       }
        
       else{
         $(".gestures img").attr("src","../../images/gestures/numbers/"+number+"a.jpg")
       }
         
     }
       
     else if(number==16 || number==19){
        current_image = $(".gestures img").attr("src");
        if(current_image == "../../images/gestures/numbers/10a.jpg"){
         $(".gestures img").attr("src","../../images/gestures/numbers/10c.jpg")         
        }
         
        else if(current_image == "../../images/gestures/numbers/10c.jpg"){
          $(".gestures img").attr("src","../../images/gestures/numbers/"+(number-10)+".jpg")
        }
        
       else{
         $(".gestures img").attr("src","../../images/gestures/numbers/10a.jpg")
       } 
     }
       
     else if(number==17 || number==18){
        current_image = $(".gestures img").attr("src");
        if(current_image == "../../images/gestures/numbers/10a.jpg"){
         $(".gestures img").attr("src","../../images/gestures/numbers/10c.jpg")         
        }
         
        else if(current_image == "../../images/gestures/numbers/10c.jpg"){
          $(".gestures img").attr("src","../../images/gestures/numbers/"+(number-10)+"a.jpg")
        }
         
        else if(current_image == "../../images/gestures/numbers/"+(number-10)+"a.jpg"){
          $(".gestures img").attr("src","../../images/gestures/numbers/"+(number-10)+"b.jpg")
        }
        
       else{
         $(".gestures img").attr("src","../../images/gestures/numbers/10a.jpg")
       }   
     }
       
    else if(number == 60 || number == 90){
      current_image = $(".gestures img").attr("src");
      if(current_image == "../../images/gestures/numbers/"+(number/10)+".jpg"){
        $(".gestures img").attr("src","../../images/gestures/O.jpg")         
      }
      else{
        $(".gestures img").attr("src","../../images/gestures/numbers/"+(number/10)+".jpg")
      }
    }
       
    else if(number == 70 || number == 80){
      current_image = $(".gestures img").attr("src");
      if(current_image == "../../images/gestures/numbers/"+(number/10)+"a.jpg"){
        $(".gestures img").attr("src","../../images/gestures/numbers/"+(number/10)+"b.jpg");
      }
      else if(current_image == "../../images/gestures/numbers/"+(number/10)+"b.jpg"){
        $(".gestures img").attr("src","../../images/gestures/O.jpg")         
      }
      else{
        $(".gestures img").attr("src","../../images/gestures/numbers/"+(number/10)+"a.jpg")
      } 
    }
    
    else if(number == 100){
      current_image = $(".gestures img").attr("src");
      if(current_image == "../../images/gestures/numbers/100a.jpg"){
        $(".gestures img").attr("src","../../images/gestures/numbers/100b.jpg");
      }
      else{
        $(".gestures img").attr("src","../../images/gestures/numbers/100a.jpg")
      } 
    }
       
       
   }, 1500);
});