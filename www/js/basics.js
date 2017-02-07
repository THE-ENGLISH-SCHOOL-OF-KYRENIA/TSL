$(document).ready(function(){
  
  
  setInterval(function(){
    
	//landscape
    if(window.innerHeight < window.innerWidth){
      $('#greeting').css('margin-left', '10%');
      $('#weather').css('margin-left', '10%');
      $('#colours').css('margin-left', '70%');
      $('#directions').css('margin-left', '70%');
    }
    //portrait
    else{
      $('#greeting').css('margin-left', '9%');
      $('#weather').css('margin-left', '9%');
      $('#colours').css('margin-left', '56%'); 
      $('#directions').css('margin-left', '56%');
    }
      
    },1);
      

 
});
