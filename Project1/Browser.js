var browser;


function browserChk()   // To check the browser as well as its version.
                        // Also navigate users to other page (To download latest browser) in case user is having outdated browser
{    
 
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            //alert('You are in Chrome');
        } else if (navigator.userAgent.indexOf("Safari") != -1) {
            //alert('You are in Safari');
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            //alert('You are in Firefox');
        } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) 
        {
            if((navigator.userAgent.indexOf("MSIE 7.")!=-1)){
                  
                window.location.href="browse.html";
            }
                
        }
        else {
             window.location.href="browse.html";
        }

}