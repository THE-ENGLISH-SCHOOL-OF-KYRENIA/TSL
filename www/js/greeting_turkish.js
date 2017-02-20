$(document).ready(function(){
  
  imageIndex = 1;
  
  //Tracking the button clicks
  //--------------------------
  $("#rightArrow").click(function(){
    if(imageIndex<6){
      imageIndex += 1;  
    }
    else {
      imageIndex = 1; 
    }
  });
    
  $("#leftArrow").click(function(){
    if(imageIndex>0){
      imageIndex -= 1;
    }
     else {
      imageIndex = 6; 
    }
  });
  //--------------------------

  //Controls the images on the page   
  function imageChanger(){ 
    
    link = $("#imageHolder").attr("src");
     
    //Gesture - hello
    if(imageIndex==1){
      //text with explanation
      $("#explanation").html("Merhaba!");
        
      //show the gesture by swapping the images
      if(link.indexOf("2")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/hi_1.jpg");
        $("#order").html(2);
      }
      else{
        $("#imageHolder").attr("src", "../../images/gestures/greeting/hi_2.jpg");
        $("#order").html(1);
      }
      
    }
     
    //Gesture - how are you
    else if(imageIndex==2){
     
      if(link.indexOf("h_r_u_1")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/h_r_u_2.jpg");  
        $("#order").html(3);
      }
        
      else if(link.indexOf("point")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/h_r_u_1.jpg");
        $("#order").html(2);
      }
        
      else{
         $("#imageHolder").attr("src", "../../images/gestures/greeting/point_to.jpg"); 
         $("#order").html(1);
      }
      $("#explanation").html("Nasılsın?");
    }
     
    //Gesture - I am fine
    else if(imageIndex==3){
        
      if(link.indexOf("fine_1")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/fine_2.jpg");  
        $("#order").html(3);
      }
        
      else if(link.indexOf("point")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/fine_1.jpg");
        $("#order").html(2);
      }
        
      else{
         $("#imageHolder").attr("src", "../../images/gestures/greeting/self_point.jpg"); 
         $("#order").html(1);
      }
      $("#explanation").html("Ben iyiyim.");
        
    }
      
    //Gesture - What is your name
    else if(imageIndex==4){
        
      if(link.indexOf("name_1")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/name_2.jpg");  
        $("#order").html(3);
      }
        
      else if(link.indexOf("point")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/name_1.jpg");
        $("#order").html(2);
      }
        
      else{
        $("#imageHolder").attr("src", "../../images/gestures/greeting/point_to.jpg"); 
        $("#order").html(1);
      }
        $("#explanation").html("Adın ne?");
    }
      
    //Gesture - My name is 
    else if(imageIndex==5){
        
       if(link.indexOf("name_1")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/name_2.jpg");  
        $("#order").html(3);
      }
        
      else if(link.indexOf("point")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/name_1.jpg");
        $("#order").html(2);
      }
        
      else{
        $("#imageHolder").attr("src", "../../images/gestures/greeting/self_point.jpg"); 
        $("#order").html(1);
      } 
      $("#explanation").html("Benim adım...");
    }
    else if(imageIndex==6){
      if(link.indexOf("2")>0){
        $("#imageHolder").attr("src", "../../images/gestures/greeting/c_u_1.jpg");
        $("#order").html(1);
      }
      else{
        $("#imageHolder").attr("src", "../../images/gestures/greeting/c_u_2.jpg");
        $("#order").html(2);
      }
        $("#explanation").html("Görüşürüz!");
    }
    
    
  }
    
  setInterval(imageChanger, 750);

    

});

