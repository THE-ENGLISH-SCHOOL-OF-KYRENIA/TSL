$(document).ready(function(){
    
  var pos = $("#imageHolder").position(); 
  $('#order').css('left', pos.left + 20);
  $( window ).resize(function() {
    //adjusting the position of the order number relative to the image
    var pos = $("#imageHolder").position(); 
    $('#order').css('left', pos.left + 20);
  });
    
  imageIndex = 1;
  
  //Tracking the button clicks
  //--------------------------
  $(".rightArrow").click(function(){
    if(imageIndex<7){
      imageIndex += 1;  
    }
    else {
      imageIndex = 1; 
    }
      
      
  });
    
  $(".leftArrow").click(function(){
    if(imageIndex>1){
      imageIndex -= 1;
    }
     else {
      imageIndex = 7;
    }
    
  });
  //--------------------------

  //Controls the images on the page   
  function imageChanger(){ 
      
    link = $("#imageHolder").attr("src");
     
    //Gesture - Ambulance
    if(imageIndex==1){
        
      if(link.indexOf("ambulance1")>0){
        $("#imageHolder").attr("src", "../../images/gestures/help/ambulance2.png");  
        $("#order").html(2);
      }
        
      else if(link.indexOf("ambulance2")>0){
        $("#imageHolder").attr("src", "../../images/gestures/help/ambulance3.png");
        $("#order").html(3);
      }
        
      else{
         $("#imageHolder").attr("src", "../../images/gestures/help/ambulance1.png"); 
         $("#order").html(1);
      }
      $("#explanation").html("Ambulans");
      
    }
     
    //Gesture - fire
    else if(imageIndex==2){
     
      if(link.indexOf("2")>0){
        $("#imageHolder").attr("src", "../../images/gestures/help/fire1.png");
        $("#order").html(2);
      }
      else{
        $("#imageHolder").attr("src", "../../images/gestures/help/fire2.png");
        $("#order").html(1);
      }
        $("#explanation").html("Ateş");
    }
     
    //Gesture - help
    else if(imageIndex==3){
        
      if(link.indexOf("2")>0){
        $("#imageHolder").attr("src", "../../images/gestures/help/help1.png");
        $("#order").html(2);
      }
      else{
        $("#imageHolder").attr("src", "../../images/gestures/help/help2.png");
        $("#order").html(1);
      }
        $("#explanation").html("Yardım");
        
    }
      
    //Gesture - lost
    else if(imageIndex==4){
        
       if(link.indexOf("2")>0){
        $("#imageHolder").attr("src", "../../images/gestures/help/lost1.png");
        $("#order").html(1);
      }
      else{
        $("#imageHolder").attr("src", "../../images/gestures/help/lost2.png");
        $("#order").html(2);
      }
        $("#explanation").html("Kaybolmak");
        
    }
      
    //Gesture - Money 
    else if(imageIndex==5){
        
     if(link.indexOf("2")>0){
        $("#imageHolder").attr("src", "../../images/gestures/help/money1.png");
        $("#order").html(1);
      }
      else{
        $("#imageHolder").attr("src", "../../images/gestures/help/money2.png");
        $("#order").html(2);
      }
        $("#explanation").html("Para");
    }
      
    //Phone
    else if(imageIndex==6){
       if(link.indexOf("2")>0){
        $("#imageHolder").attr("src", "../../images/gestures/help/phone1.png");
        $("#order").html(1);
      }
      else{
        $("#imageHolder").attr("src", "../../images/gestures/help/phone2.png");
        $("#order").html(2);
      }
        $("#explanation").html("Telefon");
    }
      
    //Police
    else {
       if(link.indexOf("2")>0){
        $("#imageHolder").attr("src", "../../images/gestures/help/police1.png");
        $("#order").html(1);
      }
      else{
        $("#imageHolder").attr("src", "../../images/gestures/help/police2.png");
        $("#order").html(2);
      }
        $("#explanation").html("Polis");
    }
      
    
    
  }
    
  setInterval(imageChanger, 750);

    

});

