const textElement = document.querySelector(".fancy");
const text = textElement.textContent;
const splitText = text.split("");
console.log(splitText);
textElement.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  textElement.innerHTML += "<span>" + splitText[i] + "</span>";
}
// for(let i=11;i<splitText.length;i++){
//     const span = textElement.querySelectorAll('span')[i];
//     span.setAttribute("id","nextLine")
// }
const span1 = textElement.querySelectorAll('span')[11];
span1.setAttribute("id","nextLine")
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = textElement.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === splitText.lenght) {
    complete();
    return;
  }
}
function complete() {
  classInterval(timer);
  timer = null;
}
