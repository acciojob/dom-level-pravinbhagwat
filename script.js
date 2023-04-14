let element = document.getElementById("level");
let level = 0;
while (element.parentNode !== null) {
  level++;
  element = element.parentNode;
}
window.alert(`The level of the element is: ${level}`);
