//This javascript code is aimed fo eng/tur main pages and it deals with the name of the user

//this bit checks if name of the user is known
  $(document).ready(function(){
    var u_name =localStorage.getItem('name');
    if(u_name == null){    
      $(".ask_name").show();
    }
    //if we know the name we just show him different sections to choose
    else{
      $(".rubric_choice").show();
      if(window.location.href.indexOf("eng") > -1){
        var say_hi = "Hello, "
      }
      else{
        say_hi = "Merhaba, ";
      }
      $("#greeting").text(say_hi + u_name + "!");
    }
  });
            
    //Javascript that deletes local storage data so that the name will be asked again if user wants to change it
    function new_name(){
      localStorage.removeItem('name');
      location.reload();
    }                