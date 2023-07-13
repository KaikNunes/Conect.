// Seleciona os botões de aumento e diminuição de fonte
var increaseButton = document.getElementById("increase-font");
var decreaseButton = document.getElementById("decrease-font");

// Adiciona os ouvintes de eventos para os botões
increaseButton.addEventListener("click", increaseFontSize);
decreaseButton.addEventListener("click", decreaseFontSize);

// Função para aumentar o tamanho da fonte
function increaseFontSize() {
  var elements = document.querySelectorAll("body *");
  for (var i = 0; i < elements.length; i++) {
    var fontSize = window.getComputedStyle(elements[i]).fontSize;
    elements[i].style.fontSize = parseFloat(fontSize) * 1.1 + "px";
  }
}

// Função para diminuir o tamanho da fonte
function decreaseFontSize() {
  var elements = document.querySelectorAll("body *");
  for (var i = 0; i < elements.length; i++) {
    var fontSize = window.getComputedStyle(elements[i]).fontSize;
    elements[i].style.fontSize = parseFloat(fontSize) * 0.9 + "px";
  }
}
