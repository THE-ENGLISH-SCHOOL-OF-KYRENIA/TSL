//Javascript showing name in sign language
function show_name(name){
      for (var i = 0, len = name.length; i < len; i++) {
		  
		 localStorage.setItem('name', name);  
        //these three lines below cause every iteration to run with a delay which is 2.5 seconds in this case
        window.setTimeout(
          (function (i){ 
            return function() {
			  
              if(name[i].toUpperCase() == "Ö"  ){ 
                $("#sign").attr("src","../images/gestures/O-1.jpg")
                setTimeout(function(){            
                  $("#sign").attr("src","../images/gestures/O-2.jpg") 
                }, 1000);         
              } 
                                
              else if(name[i].toUpperCase() == "Y"){
                $("#sign").attr("src","../images/gestures/Y.jpg")
                setTimeout(function(){          
                  $("#sign").attr("src","../images/gestures/Y2.jpg")          
                }, 1000);  
              }

              else if(name[i].toUpperCase() == "Ü" ){
              $("#sign").attr("src","../images/gestures/U-1.jpg")
                setTimeout(function(){  
                  $("#sign").attr("src","../images/gestures/U-2.jpg")          
                }, 1000); 
              }
    
              else if(name[i].toUpperCase() == "Ç" ){
                $("#sign").attr("src","../images/gestures/C-.jpg")
              }                                
            
              else if(name[i].toUpperCase() == "Ş" ){
                $("#sign").attr("src","../images/gestures/S-.jpg")
              }
                                
              else if(name[i].toUpperCase() == "Ğ" ){
                $("#sign").attr("src","../images/gestures/G-.jpg")
              }                                
                                            
              else if( name[i].toUpperCase() == "İ" ){
                $("#sign").attr("src","../images/gestures/I-.jpg")
              }
                                
              else if(name[i].toUpperCase() == "J" ){
                $("#sign").attr("src","../images/gestures/J.jpg")
                setTimeout(function(){          
                  $("#sign").attr("src","../images/gestures/J-1.jpg")          
                }, 1000);                                     
                setTimeout(function(){          
                  $("#sign").attr("src","../images/gestures/J-2.jpg")          
                }, 2000);
              }
                                
              else if( name[i] == " "){}
			  
			  else if( name[i].toUpperCase() != "A" or "B" or "C" or "Ç" or "D" or "E" or "F" or "G" or "Ğ" or "H" or "I" or "İ" or "J" or "K" or "L" or "M" "N" "O" or "Ö" or "P" or "R" or "S" or "Ş" or "T" or "U" or "Ü" or "V" or "Y" or "Z"){
				 $("#warning_message").html("please use lettters for your name")
			  }
			  
              else{
                $("#sign").attr("src","../images/gestures/" + name[i].toUpperCase() +".jpg"); 
              }                   
			 
			  setTimeout(function(){          
                  $("#sign").attr("src","../images/blank.JPG")          
                }, 3500); 
			   
              // end of loop
              if(i==(len-1)){
                setTimeout(function(){
                  location.reload();
                },2000);
              }
                                                
            }
        })(i),i * 4000)
    }
}

function bored_user(){
	 setTimeout(function(){
		 
	  $( "#sign" ).dblclick(function() {
       location.reload();	
      });
	    
	},2000);
	
}


