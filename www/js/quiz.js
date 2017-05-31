$(document).ready(function(){
    
  $("#sign").attr("src", "../../images/gestures/help/help2.png");

  //this function animates the images
  function imageChanger(param){
      
      var img_url = $("#sign").attr("src");
      
      if(param == 1){
      
        if(img_url.indexOf("1")>0){
          $("#sign").attr("src", "../../images/gestures/help/help2.png");
        }
      
        else{
          $("#sign").attr("src", "../../images/gestures/help/help1.png");
        }  
          
      }
      
      
      else if(param==2){
        if(img_url.indexOf("1")>0){
          $("#sign").attr("src", "../../images/gestures/help/ambulance2.png");
        }
          
        else if(img_url.indexOf("2")>0){
          $("#sign").attr("src", "../../images/gestures/help/ambulance3.png");  
        }
      
        else{
          $("#sign").attr("src", "../../images/gestures/help/ambulance1.png");
        } 
          
      }
      
      else if(param==3){
               
        if(img_url.indexOf("1")>0){
          $("#sign").attr("src", "../../images/gestures/colours/black_2.jpg");
        }
      
        else{
          $("#sign").attr("src", "../../images/gestures/colours/black_1.jpg");
        } 
              
      }
      
      else if(param==4){
        if(img_url.indexOf("1")>0){
          $("#sign").attr("src", "../../images/gestures/greeting/c_u_2.jpg");
        }
      
        else{
          $("#sign").attr("src", "../../images/gestures/greeting/c_u_1.jpg");
        }   
      }
      
      else if(param==5){
        if(img_url.indexOf("1")>0){
          $("#sign").attr("src", "../../images/gestures/greeting/h_r_u_2.jpg");
        }
      
        else{
          $("#sign").attr("src", "../../images/gestures/greeting/h_r_u_1.jpg");
        }   
      }
      
      
      
      
      
   
  }
    
  //first interval that animates image1
  var firstInterval = setInterval(imageChanger, 750, 1);
    
  //variable that keeps track of the question number
  var question = 1
    
  //variable that contains the score
  var score = 5;
    
  allow_click = 1; //this variable prevents unnecessary clicks
    
  //this piece of code makes sure that the answers chosen are correct    
  $(".btn").click(function(){
      
    if(question == 1 && allow_click== 1){
      
      if( $(this).attr('id') != "btn3"){
        $(this).css("background", "red")
        score-=1;
      }   
      
      $("#btn3").css("background", "green");
    
      
      allow_click = 0; //do not allow any click before the next quiz phase is ready
        
      //moves to the second question of the quiz
      setTimeout(second_question, 2000);
        
    }
      
    else if(question == 2 && allow_click== 1){
      if( $(this).attr('id') != "btn4"){
        $(this).css("background", "red")
        score-=1;
      }   
      
      $("#btn4").css("background", "green");
        
      allow_click = 0; //do not allow any click before the next quiz phase is ready
     
      //moves to the third question of the quiz
      setTimeout(third_question, 2000);  
        
    }
      
    else if(question == 3 && allow_click== 1){
        
      if( $(this).attr('id') != "btn1"){
        $(this).css("background", "red")
        score-=1;
      }   
      
      $("#btn1").css("background", "green");
        
      allow_click = 0; //do not allow any click before the next quiz phase is ready
        
      //moves to the third question of the quiz
      setTimeout(fourth_question, 2000);  
        
    }
      
    else if(question == 4 && allow_click== 1){
        
      if( $(this).attr('id') != "btn3"){
        $(this).css("background", "red")
        score-=1;
      }   
      
      $("#btn3").css("background", "green");
        
       allow_click = 0; //do not allow any click before the next quiz phase is ready
        
      //moves to the third question of the quiz
      setTimeout(fifth_question, 2000);  
        
    }
      
    else if(question == 5 && allow_click== 1){
        
      if( $(this).attr('id') != "btn2"){
        $(this).css("background", "red")
        score-=1;
      }   
      
      $("#btn2").css("background", "green");
        
      allow_click = 0; //do not allow any click before the next quiz phase is ready
        
      //moves to the third question of the quiz
      setTimeout(end, 2000);  
        
    }
    
    
    
    
    
    
    //this function changes the image and the text of the buttons after a delay
    function second_question(){
        
      clearInterval(firstInterval);
        
      $(".btn").css("background", "#149bdf")
        
      //second interval that animates image2  
      secondInterval = setInterval(imageChanger, 750, 2);  
        
      //this bit moves the progress bar forward
      $(".progress .bar").css("width", "40%")
      $("#progress_track").text("2/5")
        
      //change the text of the buttons
      $("#btn1").text("Police");
      $("#btn2").text("Money");
      $("#btn3").text("Wind");
      $("#btn4").text("Ambulance");
        
      allow_click=1;
      question = 2;
    }
    
    //this function changes the image and the text of the buttons after a delay
    function third_question(){
        
      clearInterval(secondInterval);
        
      $(".btn").css("background", "#149bdf")
        
      //second interval that animates image2  
      thirdInterval = setInterval(imageChanger, 750, 3); 
        
      //this bit moves the progress bar forward
      $(".progress .bar").css("width", "60%")
      $("#progress_track").text("3/5") 
        
      //change the text of the buttons
      $("#btn1").text("Black");
      $("#btn2").text("See you");
      $("#btn3").text("Hi");
      $("#btn4").text("Hot");
      
      allow_click=1;  
      question = 3;
    }
      
    function fourth_question(){
        
      clearInterval(thirdInterval);
        
      $(".btn").css("background", "#149bdf")
        
      //second interval that animates image2  
      fourthInterval = setInterval(imageChanger, 750, 4); 
        
      //this bit moves the progress bar forward
      $(".progress .bar").css("width", "80%")
      $("#progress_track").text("4/5") 
        
      //change the text of the buttons
      $("#btn1").text("Police");
      $("#btn2").text("Sunset");
      $("#btn3").text("See you");
      $("#btn4").text("Brown");
        
        
      allow_click=1;        
      question = 4;
    }
      
    function fifth_question(){
        
      clearInterval(fourthInterval);
        
      $(".btn").css("background", "#149bdf")
        
      //second interval that animates image2  
      fifthInterval = setInterval(imageChanger, 750, 5); 
        
      //this bit moves the progress bar forward
      $(".progress .bar").css("width", "100%")
      $("#progress_track").text("5/5") 
        
      //change the text of the buttons
      $("#btn1").text("Flower");
      $("#btn2").text("How are you?");
      $("#btn3").text("Fire");
      $("#btn4").text("Phone");
       
      allow_click=1;
      question = 5;
    }
      
    function end(){
      clearInterval(fifthInterval);
      $(".btn").hide();
      $("#sign").hide();
      $("#score").text("Your score: " + score)
    }
      
      
      
      
    
      
    
      
      
  }); 
    
    
});