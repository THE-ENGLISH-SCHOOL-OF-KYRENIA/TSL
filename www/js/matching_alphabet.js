//This Javascript is responsible for matching letters with gestures images in alphabet pages
$(document).ready(function(){
    $(".letters a").addClass('inactive');
    $("#a_ltr").addClass('selected');
            $( "a" ).click(function() {  
                $("a").removeClass('selected');                
                $( this ).addClass('selected');
                
                //manipulating with images
                var letter = $(this).text();
                if(letter == "Ö" ){ 
                    $("a").addClass("wait_click");// so that user doesn't click another letter before  gesture wasn't showed fully                    
                    $("#sign").attr("src","../images/gestures/O-1.jpg")
                    setTimeout(function(){                        
                        $("#sign").attr("src","../images/gestures/O-2.jpg") 
                        $("a").removeClass("wait_click");
                    }, 1000);                       
                                      
                    
                }
                
                else if(letter == "Y"){
                    $("a").addClass("wait_click");// so that user doesn't click another letter before  gesture wasn't showed fully
                    $("#sign").attr("src","../images/gestures/Y.jpg")
                    setTimeout(function(){                        
                        $("#sign").attr("src","../images/gestures/Y2.jpg") 
                        $("a").removeClass("wait_click");
                    }, 1000);      
                }
                
                else if(letter == "Ü"){
                    $("a").addClass("wait_click");// so that user doesn't click another letter before  gesture wasn't showed fully
                    $("#sign").attr("src","../images/gestures/U-1.jpg")
                    setTimeout(function(){                        
                        $("#sign").attr("src","../images/gestures/U-2.jpg") 
                        $("a").removeClass("wait_click");
                    }, 1000); 
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