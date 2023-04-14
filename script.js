const element = document.getElementById("level");
let level = 0;
while (element) {
  level++;
  element = element.parentNode;
}
alert("The level of element is:",level);
