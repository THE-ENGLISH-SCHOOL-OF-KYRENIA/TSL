$(document).ready(function(){ 
    
  //show hot weather gesture as default
  $("#default").addClass("selected");
  show_gesture("../../images/basics/weather/hot.jpg")
  
  function show_gesture(weather){
    try{
      window.clearInterval(refreshIntervalId);
    } catch(err){}
      
    
    
    window.refreshIntervalId = setInterval(function(){
      current_image = $("#weather_gesture").attr("src");
      
      if(weather.indexOf("love") != -1){ //I love
        if(current_image.indexOf("love_1") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/love_2.jpg"); 
        }
        else if(current_image.indexOf("love_2") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/love_3.jpg"); 
        }
        else{
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/love_1.jpg");
        }
       }
        
      else if(weather.indexOf("hot") != -1){
        if(current_image.indexOf("hot_1") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/hot_2.jpg"); 
        }
        else if(current_image.indexOf("hot_2") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/hot_3.jpg"); 
        }
        else{
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/hot_1.jpg");
        }
      }
        
      
        
      else if(weather.indexOf("cold") != -1){
        if(current_image.indexOf("cold_1") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/cold_2.jpg"); 
        }
        else if(current_image.indexOf("cold_2") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/cold_3.jpg"); 
        }
        else{
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/cold_1.jpg");
        }
      }
        
      else if(weather.indexOf("rainy") != -1){
        if(current_image.indexOf("rain_1") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/rain_2.jpg"); 
        }
        else{
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/rain_1.jpg");
        }
      }
        
      else if(weather.indexOf("snow") != -1){
        if(current_image.indexOf("snow_1") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/snow_2.jpg"); 
        }
        else{
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/snow_1.jpg");
        }
      }
      
      else if(weather.indexOf("sky") != -1){
        if(current_image.indexOf("sky_1") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/sky_2.jpg"); 
        }
        else if(current_image.indexOf("sky_2") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/sky_3.jpg"); 
        }
        else{
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/sky_1.jpg");
        }
      }
      
      
      
    }, 2500); 
    
  }
        
  //Colours chosen after default was shown
  $(".clip").click(function(){
  $(".clip").removeClass("selected"); //unclicking previously chosen circles
  $(this).addClass("selected");
  chosen_weather = $(".selected").attr("src");
  show_gesture(chosen_weather);
  });
  
});