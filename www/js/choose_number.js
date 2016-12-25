$(document).ready(function(){
    
  //Learn the number when "equality" button is pressed
  $("#learn_btn").click(function(){
    if(typeof hundreds == 'undefined'){hundreds=0;}
    if(typeof tens == 'undefined'){tens=0;}
    if(typeof ones == 'undefined'){ones=0;}
    
      
      
    //hundreds
    if(hundreds>0){        
       $(".number_block .huns").css("color", "red");
        
      if(hundreds==1){
        $("#learn_btn").addClass("wait_click");
        $("#gesture").attr("src","../../images/gestures/numbers/100a.jpg");
        setTimeout(function(){         
          $("#gesture").attr("src","../../images/gestures/numbers/100b.jpg");
          $("#learn_btn").removeClass("wait_click");
          $(".number_block .huns").css("color", "white");
        }, 2500);       
       }
        
       else if(hundreds>=2 && hundreds<=9){
         $("#gesture").attr("src","../../images/gestures/numbers/" + hundreds + "00.jpg");
          setTimeout(function(){         
            $(".number_block .huns").css("color", "white"); 
          }, 2500);  
       }
        
       time_for_tens = 3500;
    }
      
    else{
        time_for_tens = 100;
    }
    
    //tens
    setTimeout(function(){  
        
        $(".number_block .tens").css("color", "red");
        if(tens==1){
          $("#learn_btn").addClass("wait_click");
          $("#gesture").attr("src","../../images/gestures/numbers/10a.jpg")
          setTimeout(function(){         
            $("#gesture").attr("src","../../images/gestures/numbers/10c.jpg")         
          }, 2000);
          
           setTimeout(function(){         
            $("#gesture").attr("src","../../images/gestures/numbers/10a.jpg") 
            $("#learn_btn").removeClass("wait_click");
            $(".number_block .tens").css("color", "white");
          }, 3000);
            
            setTimeout(function(){
              show_ones();
            }, 4000);
                  
        }
        
        
        else if(tens>=2 && tens<=5){
            
          $("#learn_btn").addClass("wait_click");
          $("#gesture").attr("src","../../images/gestures/numbers/"+tens+"0a.jpg")
          setTimeout(function(){         
            $("#gesture").attr("src","../../images/gestures/numbers/"+tens+"0b.jpg")         
          }, 2000);
          
           setTimeout(function(){         
            $("#gesture").attr("src","../../images/gestures/numbers/"+tens+"0a.jpg") 
            $("#learn_btn").removeClass("wait_click");
            $(".number_block .tens").css("color", "white");
          }, 3000); 
            
            setTimeout(function(){
              show_ones();
            }, 4000);
                  
        }
        
        else if(tens == 7 || tens == 8) {
          $("#learn_btn").addClass("wait_click");
          $("#gesture").attr("src","../../images/gestures/numbers/"+tens+"a.jpg")
          setTimeout(function(){         
            $("#gesture").attr("src","../../images/gestures/numbers/"+tens+"b.jpg")  
            $(".number_block .tens").css("color", "white");
            $("#learn_btn").removeClass("wait_click");
          }, 2000);
            
          setTimeout(function(){
              show_ones();
            }, 4000);
            
        }
        
        else if(tens==0 && hundreds!=0){
          $("#learn_btn").addClass("wait_click");
          $("#gesture").attr("src","../../images/gestures/O.jpg")
          setTimeout(function(){           
            $(".number_block .tens").css("color", "white");
            $("#learn_btn").removeClass("wait_click");
          }, 1000); 
        }
        
        else if(tens==0 && hundreds==0){
          $(".number_block .tens").css("color", "white");
          show_ones();
        }
        
        else{
          $("#learn_btn").addClass("wait_click");
          $("#gesture").attr("src","../../images/gestures/numbers/"+tens+".jpg")
          setTimeout(function(){           
            $(".number_block .tens").css("color", "white");
            $("#learn_btn").removeClass("wait_click");
          }, 1000);  
        }
        
        
         
    }, time_for_tens);
    
      
    //ones
    function show_ones(){
     $(".number_block .ones").css("color", "red");
     if(ones==7 || ones==8){
        $("#learn_btn").addClass("wait_click");
        $("#gesture").attr("src","../../images/gestures/numbers/"+ones+"a.jpg");
        setTimeout(function(){         
          $("#gesture").attr("src","../../images/gestures/numbers/"+ones+"b.jpg");
          $(".number_block .tens").css("color", "white");
          $("#learn_btn").removeClass("wait_click");
        }, 1000);  
      }
         
      else if(ones==0){
        $("#gesture").attr("src","../../images/gestures/O.jpg");
        setTimeout(function(){         
          $(".number_block .ones").css("color", "white");
        }, 1000);
      }
        
      else{
        $("#learn_btn").addClass("wait_click");
        $("#gesture").attr("src","../../images/gestures/numbers/"+ones+".jpg");
        setTimeout(function(){         
          $(".number_block .ones").css("color", "white");
          $("#learn_btn").removeClass("wait_click");
        }, 1000);
      }       
        
    }  
      
      
      
  });
    

    
    
    

  //read value of hundreds and increase its value by one
  $(".huns_up").click(function(){
    hundreds = parseInt($(".number_block .huns").html());
    if(hundreds<9){
      hundreds+=1;
      $(".number_block .huns").html(hundreds)
    }  
  });
    
  //read value of tens and increase its value by one
  $(".tens_up").click(function(){
    tens = parseInt($(".number_block .tens").html());
    if(tens<9){
      tens+=1;
      $(".number_block .tens").html(tens)
    }  
  });
    
  //read value of ones and increase its value by one
  $(".ones_up").click(function(){
    ones = parseInt($(".number_block .ones").html());
    if(ones<9){
      ones+=1;
      $(".number_block .ones").html(ones)
    }  
  });  
    
  //read value of hundreds and decrease its value by one
  $(".huns_down").click(function(){
    hundreds = parseInt($(".number_block .huns").html());
    if(hundreds>0){
    hundreds-=1;
      $(".number_block .huns").html(hundreds)
    }  
  });
    
  //read value of tens and increase its value by one
  $(".tens_down").click(function(){
    tens = parseInt($(".number_block .tens").html());
    if(tens>0){
      tens-=1;
      $(".number_block .tens").html(tens)
    }  
  });
    
  //read value of ones and increase its value by one
  $(".ones_down").click(function(){
    ones = parseInt($(".number_block .ones").html());
    if(ones>0){
      ones-=1;
      $(".number_block .ones").html(ones)
    }  
  });  
 
 
    
    
    
});