function USername()
{
	var Name=document.getElementById("user").value;
	var pattern=/^([F,f])([a-z,A-Z]{3,9})+$/
	if(pattern.test(Name))
	{
		return true;
	}
	else
	{
		document.getElementById("user").style.border="1px solid red";   	    
		document.getElementById("n").style.visibility="visible";
		return false;
	}
}
function Email()
{
	var mail=document.getElementById("email").value;
	var pattern1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if(pattern1.test(mail))
	{
		return true;
	}
	else
	{   document.getElementById("email").style.border="1px solid red";   	    
		document.getElementById("e").style.visibility="visible";
		return false;
	}
}
function Mobileno()
{
	var Mobile=document.getElementById("number").value;
	var pattern21= /^[9][7][7]\d{7}$/
	var pattern22=/^[0-9]{4}[-][0-9]{4}[-][0-9]{4}$/;
	if(pattern21.test(Mobile) || pattern22.test(Mobile))
	{
		return true;
	}
	else
	{   document.getElementById("number").style.border="1px solid red";   	    
		document.getElementById("m").style.visibility="visible";
		return false;
	}
}
function DDvalidation(){
    var dd1=document.getElementById("dd").value;
    var dd2=document.getElementById("dd");
    var pattern31=/^SBIN\d{8}$/;
            if(pattern31.test(dd1)){
                return true;
            }
            else{
                dd.style.border="red solid 2px";
                return false;
            }
        }
 function ACvalidation()
 {
    var ac1=document.getElementById("ac").value;
    var ac2=document.getElementById("ac");
    var pattern32=/^\d{11}$/;
    if(pattern32.test(ac1))
    {
        return true;
    }
    else{
         ac.style.border="red solid 2px";
         return false;
         }
     }
     function changeBg(){
        const images=[
            'url("R.jpg")',
            'url("R1.jpg")',
            'url("R2.jpg")',
            'url("R3.jpg")',
    
        ]
        const section=document.querySelector("#img")
        const bg=images[Math.floor(Math.random()* images.length )];
        img.style.backgroundImage=bg;
    }
    setInterval(changeBg,500)
function validate()
{
	var r=USername();
	var r1=Email();
	var r2=Mobileno();
	var r3=DDvalidation();
	var r4=ACvalidation();
	var r5=changeBg();
	if(r&&r1&&r2&&r3&&r4&&r5)
	{
		return true;
	}
	else
	{
		return false;
	}
}