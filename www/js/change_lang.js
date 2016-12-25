function change_lang(){

if(window.location.href.indexOf("English") > -1){
  var link = location.href.replace("EnglishBranch", "TurkishBranch");
  location.href = link.replace("eng", "tur"); 
}
    
else{
  var link = location.href.replace("TurkishBranch", "EnglishBranch");
  location.href = link.replace( "tur", "eng");
    }
}

function langChange(){
  localStorage.setItem('lang', 0);
}
