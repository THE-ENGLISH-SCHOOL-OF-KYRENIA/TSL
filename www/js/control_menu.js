//THIS JAVASCRIPT CODE IS RESPONSIBLE FOR CLOSING THE NAVIGATION MENU

//Closing using button
function open_nav(){                 
  document.getElementsByClassName("navigation")[0].style.visibility = "visible";
}        
function close_nav(){
  document.getElementsByClassName("navigation")[0].style.visibility = "hidden";
} 

//Closing via SWIPE
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            close_nav();
            
        } else {
            /* right swipe */
            
        }                      
        
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            
        } else { 
            /* down swipe */
            
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};