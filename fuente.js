function convertText() {
  const inputText = document.getElementById("input-text").value;
  const outputText = inputText.toUpperCase().split("").join(":");
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

