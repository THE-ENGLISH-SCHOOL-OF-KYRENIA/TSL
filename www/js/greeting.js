$(document).ready(function(){

 //This variable contains info on which gesture in two_gesture_sign is currently shown. Is it gesture 1 or gesture 2?
 var first_gesture = 1
 
 function two_gstr_signs() {
  jQuery('.2gstr_sign').each(function () {
      if(first_gesture==1){
        jQuery(this).attr('src', jQuery(this).attr('src').replace("1", "2"));
        $(".order").html("2");
      }
      else if (first_gesture == 0){
        jQuery(this).attr('src', jQuery(this).attr('src').replace("2", "1"));
        $(".order").html("1");
      }
	  else{
		  continue
	  }
    });
    first_gesture = 1 - first_gesture; 
}
setInterval(two_gstr_signs, 1500);

 
 function three_gstr_signs(){
    $(".3_order").html("1");
    setTimeout(function() {  $(".3_order").html("2"); }, 500);
    setTimeout(function() {  $(".3_order").html("3"); }, 2000);
    setTimeout(function() {  $(".3_order").html("1"); }, 3100);
     
   //how are you
   $("#h_r_u").attr("src", "../../images/gestures/greeting/h_r_u_1.jpg");
   setTimeout(function() { $("#h_r_u").attr("src", "../../images/gestures/greeting/h_r_u_2.jpg"); }, 1500)
   setTimeout(function() { $("#h_r_u").attr("src", "../../images/gestures/greeting/point_to.jpg"); }, 3000)
   
   //I am fine
   
   $("#fine").attr("src", "../../images/gestures/greeting/fine_1.jpg");
   setTimeout(function() {$("#fine").attr("src", "../../images/gestures/greeting/fine_2.jpg"); }, 1500)
   setTimeout(function() { $("#fine").attr("src", "../../images/gestures/greeting/self_point.jpg"); }, 3000)
   
   //What is your name
   $("#your_name").attr("src", "../../images/gestures/greeting/name_1.jpg");
   setTimeout(function() { $("#your_name").attr("src", "../../images/gestures/greeting/name_2.jpg"); }, 1500)
   setTimeout(function() { $("#your_name").attr("src", "../../images/gestures/greeting/point_to.jpg"); }, 3000)
   
   //My name is....
   $("#my_name").attr("src", "../../images/gestures/greeting/name_1.jpg");
   setTimeout(function() { $("#my_name").attr("src", "../../images/gestures/greeting/name_2.jpg"); }, 1500)
   setTimeout(function() { $("#my_name").attr("src", "../../images/gestures/greeting/self_point.jpg"); }, 3000)
   
   
   
 }
 setInterval(three_gstr_signs, 4000);
    
});

