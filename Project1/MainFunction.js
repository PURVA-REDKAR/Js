
var forFom = [];
var glok = 0;
var bar =25;

function createText(ids,t){
	var i;
	var val;
	
	
   var xmlDocument = http.responseXML; 
   var lev;
	

	if(t == 0)
	{
		//to read first elements		
		lev = 200;
		i = ids;
		val = 'who';	
	}
	else{
		//to reads the value of selected elements
	   lev = 250;
       i = ids.id;	
	   val =document.getElementById(i).value;		
	}
	// Read the elements from XMLDocument and stores in an array
	val = val.replace(/\s/g, "");
	var car1 = [];
	car1[val] = [];
    for(var i11=0;i11<xmlDocument.getElementsByTagName(val).length;i11++)
	  {
	   car1[val][i11] = xmlDocument.getElementsByTagName(val).item(i11).firstChild.data;
      }
	   
    var k1 = 1;
	glok = i.substring(8);
    forFom[glok] = val;
	bar1 =glok * bar;
    var imgpi;
    imgpi = "images/" + val + ".png";
     if(t!=0){
        if (document.getElementById(i).nextSibling != null) {   
			//remove the elements
            while (document.getElementById(i).nextSibling != null) {	
	             document.getElementById(i).parentNode.removeChild(document.getElementById(i).nextSibling);
                glok = i.substring(8);
            }
        }
      }
		  
    var len = car1[val].length;
	//check for last element to generate form
	if (car1[val][0] == "done" ) {
			var Result;
			var force = car1[val][1];
			move(force);
			if(force>80)
			{
				Result = "You won a bobble head. Enter you Favroite charecter";
			}
			else
			{
				Result = "**You Loose**";	
			}
		   var div = document.createElement("div");
		   div.setAttribute("id", "form1");
           var Final = document.createElement('form');
           var Finalpara = document.createElement('p'); 
           var formFinal = document.createTextNode(Result);
           Finalpara.appendChild(formFinal);
		   div.appendChild(Finalpara);
		   //display selected results on form
           for (var p = 0; p < t; p++) {
               var choiceEle = document.createElement('p');
               choiceEle.setAttribute("class", "choiceResult");
               choiceEle.appendChild(document.createTextNode(forFom[p]));
               Final.appendChild(choiceEle);			
           }
		   var UserName = document.createElement("INPUT") ;                   
           var inpx = document.createElement("INPUT");
           inpx.setAttribute("type", "text");
		   inpx.setAttribute("id", "UserName");
		   inpx.setAttribute("value", "UserName");
		 if(window.localStorage)  /// check for LocalSTORAGE 
            {
				 if(localStorage.getItem('UserName')){	 
                    inpx.setAttribute('value',localStorage.getItem('UserName'));
				 }
            } 
		else {
                     inpx.setAttribute("value", "UserName");
			}
			
		Final.appendChild(inpx); 
        var Email = document.createElement('div');
        Email.appendChild(document.createTextNode("Your Favroite charecter"));
       // UserForm.appendChild(Email);
	   
        var inpEx = document.createElement("INPUT");
        inpEx.setAttribute("type", "text");
		inpEx.setAttribute("id", "Email");
		if(localStorage.getItem('Email')){                             
                    
		    inpEx.setAttribute('value',localStorage.getItem('Email'));
     
        }
		else
		{			
			inpEx.setAttribute("value", "charecter");	
		}
        Final.appendChild(inpEx);
		 
    	var button1 = document.createElement("INPUT");
        button1.setAttribute("id", "button1");
        button1.setAttribute("type", "submit");
        button1.setAttribute("value", "Save?");
		//button1.setAttribute("action","submit1()");
		Final.onsubmit = function(){ 		         
                 user = document.getElementById("UserName").value;
                 email = document.getElementById("Email").value;				 
            if(user == '' || email == '') { //To check the Validation for the user form 
                alert('errorrr');
            } 
			else {
                
                var formSubmit = document.createElement('FORM');
                    formSubmit.appendChild(document.createTextNode("Details submiited successfully"));

                     if(window.localStorage){
                        localStorage.setItem('Email',email);
			            localStorage.setItem('UserName',user);
			      }
			        else   // Check is cookie is enabled and retrieved
                  { 
                     document.cookie = "cookie_test";
                    (document.cookie.indexOf("cookie_test")!=-1)?cookieEnabled=true:cookieEnabled=false;
                      if(cookieEnabled){  // code to store form input values          
                          SetCookie('UserName',user);
                          SetCookie('Email',email);
                       }
					   else {
                           alert ('Cookie not enabled for the browser !!!');
                       }
                  }                 
                }       
              alert(" Your details are successfully Saved");

		};
		Final.appendChild(button1);			
		var button2 = document.createElement("INPUT");
        button2.setAttribute("id", "button2");
        button2.setAttribute("type", "button");
        button2.setAttribute("value", "DontSave?");
	    button2.onclick = function(){	
			//reset localStorage and cookie
			if(window.localStorage){
			     localStorage.removeItem('Email');
			     localStorage.removeItem('UserName');	 
			}
			else{
                  DeleteCookie('UserName');
                  DeleteCookie('Email');		
			}
                window.location.reload();			
																				
		};
		
		Final.appendChild(button2);
		div.appendChild(Final);
		document.body.appendChild(div);
			
    }
		var next = "mySelect" + t;
		var imgid = "img"+t;
		
	    var ximg = document.createElement("IMG");
        ximg.setAttribute("src", imgpi);
        ximg.setAttribute("width", "400");
        ximg.setAttribute("height", "228");
		
        ximg.setAttribute("id", imgid);
        document.body.appendChild(ximg);
        var tempt = t + k1;
		 //display images and animation
		  
          
          var pos = 0;
          var idp = setInterval(frame, 10);
          function frame() {
            if (pos >= lev ) {
              clearInterval(idp);
            } else {
              
                pos=pos+3;
              
                
              ximg.style.top = pos + 'px'; 
           
            }
          }
		
		//Create Node Select and append new child to it
        var x = document.createElement("SELECT");
        x.setAttribute("id", next);  
        for (var k = 0; k < len; k++)
         {
           
            var z = document.createElement("option");
            z.setAttribute("value", car1[val][k]);
			z.setAttribute("id", "form-control");
            var t1 = document.createTextNode(car1[val][k]);
			
			 if(ie7){

              x.setAttribute('onchange', function(){createText(this, tempt);});
                    }
	          else{
		   
		      x.setAttribute('onchange', 'createText(this, '+tempt+')'); 
		   
	              }
			if( car1[val][0]!= "done"){
				
                document.body.appendChild(x);
			    z.appendChild(t1);
                document.getElementById(next).appendChild(z);
			}
            
          }
    
		  var knew =document.getElementById(next);
		
          if(knew)
		  {

             if (document.addEventListener) {
			
                   document.getElementById(next).addEventListener('change', function () {
                       createText(x, tempt);
                    }, true);
			

        }
        else if(document.attachEvent) {
			
            document.attachEvent("onchange", function () {
                createText(x, tempt);
            });
			
        }
		}
  
	
};

 
			
	
	
	