function convertText() {
 const inputText = document.getElementById("input-text").value;
  let outputText = "";
  for (let i = 0; i < inputText.length; i++) {
    if (i > 0 && i % 2 == 0) {
      outputText += ":";
    }
    outputText += inputText[i].toUpperCase();
  }
  document.getElementById("output").textContent = outputText;
}

function copyToClipboard() {
  const outputText = document.getElementById("output").textContent;
  const tempInput = document.createElement("input");
  tempInput.value = outputText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  
  const copyButton = document.getElementById("copy-button");
  copyButton.innerHTML = "¡Copiado!";
  setTimeout(function() {
    copyButton.innerHTML = "Copiar";
  }, 2000);
}

