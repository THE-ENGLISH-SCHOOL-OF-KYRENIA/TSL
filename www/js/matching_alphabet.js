//This Javascript is responsible for matching letters with gesture images on alphabet pages
$(document).ready(function(){
    $(".letters a").addClass('inactive');
    $("#default").addClass('selected');
    $( "a" ).click(function() { 
      //highlighting letters
      $("a").removeClass('selected');                
      $( this ).addClass('selected');
        
      //Deleting used intervals
      try{
        window.clearInterval(interval);
      } catch(err){}
      
                
      //manipulating images
      var letter = $(this).text();
        
      if(letter == "Ö" ){             
        function turkishO(){ //For double and triple sign words we need intervals
          link = $("#sign").attr("src");
          if(link!="../images/gestures/O-1.jpg"){ 
            $("#sign").attr("src","../images/gestures/O-1.jpg");
          }
          else{
            $("#sign").attr("src","../images/gestures/O-2.jpg")
          }
          window.clearInterval(window.interval);
          window.interval = setInterval(turkishO, 1000);//let's increase interval a bit after the first run   
       }
       window.interval = setInterval(turkishO, 300);
       }
      
     else if(letter == "Y"){
       function Y(){ //For double and triple sign words we need intervals
         link = $("#sign").attr("src");
         if(link!="../images/gestures/Y.jpg"){
           $("#sign").attr("src","../images/gestures/Y.jpg");
         }
         else{
           $("#sign").attr("src","../images/gestures/Y2.jpg")
         }
         window.clearInterval(window.interval);
         window.interval = setInterval(Y, 1000);//let's increase interval a bit after the first run   
       }
       window.interval = setInterval(Y, 300);
     }
                
     else if(letter == "Ü"){
       function turkishU(){ //For double and triple sign words we need intervals
         link = $("#sign").attr("src");
         if(link!="../images/gestures/U-1.jpg"){
           $("#sign").attr("src","../images/gestures/U-1.jpg");
         }
         else{
           $("#sign").attr("src","../images/gestures/U-2.jpg")
         }
         window.clearInterval(window.interval);
         window.interval = setInterval(turkishU, 1000);//let's increase interval a bit after the first run   
       }
       window.interval = setInterval(turkishU, 300);
        /*
       $("a").addClass("wait_click");// so that user doesn't click another letter before  gesture wasn't showed fully
                    $("#sign").attr("src","../images/gestures/U-1.jpg")
                    setTimeout(function(){                        
                        $("#sign").attr("src","../images/gestures/U-2.jpg") 
                        $("a").removeClass("wait_click");
                    }, 1000); */
                }
    
                else if(letter == "Ç"){
                    $("#sign").attr("src","../images/gestures/C-.jpg")
                }
                
                else if(letter == "Ş"){
                    $("#sign").attr("src","../images/gestures/S-.jpg")
                }
                else if(letter == "Ğ"){
                    $("#sign").attr("src","../images/gestures/G-.jpg")
                }
                
                else if(letter == "İ"){
                    $("#sign").attr("src","../images/gestures/I-.jpg")
                }
                
                else if(letter == "J" ){
                    $("a").addClass("wait_click");// so that user doesn't click another letter before  gesture wasn't showed fully
                    $("#sign").attr("src","../images/gestures/J.jpg")
                    setTimeout(function(){          
                    $("#sign").attr("src","../images/gestures/J-1.jpg")          
                    }, 1000);                                     
                    setTimeout(function(){          
                    $("#sign").attr("src","../images/gestures/J-2.jpg") 
                    $("a").removeClass("wait_click");
                    }, 2000);
                    }
                
                
                else{
                   $("#sign").attr("src","../images/gestures/" + letter +".jpg"); 
                }   
                               
                
            });
        });
