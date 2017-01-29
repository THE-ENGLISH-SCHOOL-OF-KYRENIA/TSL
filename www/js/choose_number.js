$(document).ready(function(){
   
  //the bit below doesn't allow to enter more than one digit into a textbox
  $('.textbox').unbind('keyup change input paste').bind('keyup change input paste',function(e){
    var $this = $(this);
    var val = $this.val();
    var valLength = val.length;
    var maxCount = $this.attr('maxlength');
    if(valLength>maxCount){
        $this.val($this.val().substring(0,maxCount));
    }
  });
    
  //Obtain the chosen number value when the "equality" button is pressed
  $("#learn_btn").click(function(){
    //read value of hundreds
    hundreds = parseInt($("#huns").val());  
    //read value of tens
    tens = parseInt($("#tens").val()); 
    //read value of ones
    ones = parseInt($("#ones").val());  
      
      
      
   
    if(hundreds == 'NaN'){hundreds=0;}
    if(tens == 'NaN'){tens=0;}
    if(typeof ones == 'NaN'){ones=0;}
    
      
    //hundreds
    if(hundreds>0){  
       $("#huns").css("color", "red");
        
      if(hundreds==1){
        $("#learn_btn").addClass("wait_click");
        $("#gesture").attr("src","../../images/gestures/numbers/100a.jpg");
        setTimeout(function(){         
          $("#gesture").attr("src","../../images/gestures/numbers/100b.jpg");
          $("#learn_btn").removeClass("wait_click");
          $("#huns").css("color", "black");
        }, 2500);       
       }
       
      
       else if(hundreds>=2 && hundreds<=9){
         $("#gesture").attr("src","../../images/gestures/numbers/" + hundreds + "00.jpg");
          setTimeout(function(){         
            $("#huns").css("color", "black"); 
          }, 2500);  
       }
        
       time_for_tens = 3500;
    }
      
    else{
        time_for_tens = 100;
    }
    
      
    //tens
    setTimeout(function(){  
        
        $("#tens").css("color", "red");
        if(tens==1){
          $("#learn_btn").addClass("wait_click");
          $("#gesture").attr("src","../../images/gestures/numbers/10a.jpg")
          setTimeout(function(){         
            $("#gesture").attr("src","../../images/gestures/numbers/10c.jpg")         
          }, 2000);
          
           setTimeout(function(){         
            $("#gesture").attr("src","../../images/gestures/numbers/10a.jpg") 
            $("#learn_btn").removeClass("wait_click");
            $("#tens").css("color", "black");
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
            $("#tens").css("color", "black");
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
            $("#tens").css("color", "black");
            $("#learn_btn").removeClass("wait_click");
          }, 2000);
            
          setTimeout(function(){
              show_ones();
            }, 4000);
            
        }
        
        
        else if(tens="NaN" ||tens==0 ){
          $("#learn_btn").addClass("wait_click");
          $("#gesture").attr("src","../../images/gestures/O.jpg")
          setTimeout(function(){           
            $("#tens").css("color", "black");
            $("#learn_btn").removeClass("wait_click");
            show_ones();
          }, 1000); 
          
        }
        
        else{
          $("#learn_btn").addClass("wait_click");
          $("#gesture").attr("src","../../images/gestures/numbers/"+tens+".jpg")
          setTimeout(function(){           
            $("#tens").css("color", "black");
            $("#learn_btn").removeClass("wait_click");
          }, 1000);  
        }
        
        
         
    }, time_for_tens);
    
    
    //ones
    function show_ones(){
        
     $("#ones").css("color", "red");
     if(ones==7 || ones==8){
        $("#learn_btn").addClass("wait_click");
        $("#gesture").attr("src","../../images/gestures/numbers/"+ones+"a.jpg");
        setTimeout(function(){         
          $("#gesture").attr("src","../../images/gestures/numbers/"+ones+"b.jpg");
          $("#tens").css("color", "black");
          $("#learn_btn").removeClass("wait_click");
        }, 1000);  
      }
         
      else if(ones==0){
        $("#gesture").attr("src","../../images/gestures/O.jpg");
        setTimeout(function(){         
          $("#ones").css("color", "black");
        }, 1000);
      }
        
      else{
        $("#learn_btn").addClass("wait_click");
        $("#gesture").attr("src","../../images/gestures/numbers/"+ones+".jpg");
        setTimeout(function(){         
          $("#ones").css("color", "black");
          $("#learn_btn").removeClass("wait_click");
        }, 1000);
      }       
      
    }   
      
      
  });
    

    
    
    

 
    
 
    
    
    
});