$(document).ready(function(){
  
  
  setInterval(function(){
    
    if(window.innerHeight < window.innerWidth){
      $('#greeting').css('margin-left', '10%');
      $('#weather').css('margin-left', '40%');
      $('#colours').css('margin-left', '70%');
    }
    
    else{
      $('#greeting').css('margin-left', '9%');
      $('#weather').css('margin-left', '30%');
      $('#colours').css('margin-left', '56%');  
    }
      
    },1);
      

 
});
