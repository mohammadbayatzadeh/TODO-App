let submit = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

function outputLet() {
  return input.value.length;
}

function createElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
  let btn = document.createElement("button");
  btn.classList.add("button");
  btn.appendChild(document.createTextNode("Done"));
  li.appendChild(btn);
  btn.addEventListener("click", function () {
    li.classList.add("delete");
  });
}

function clickSubmit() {
  if (outputLet() > 0) {
    createElement();
  }
}
function enterSubmit(event) {
  if (outputLet() > 0 && event.which === 13) {
    createElement();
  }
}

submit.addEventListener("click", clickSubmit);
input.addEventListener("keypress", enterSubmit);
