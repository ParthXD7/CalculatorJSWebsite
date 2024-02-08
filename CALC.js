let darkModeEnabled = false;

function setDarkMode() {
  document.body.classList.add("dark-mode");
  darkModeEnabled = true;
}

function setLightMode() {
  document.body.classList.remove("dark-mode");
  darkModeEnabled = false;
}

function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

function calculateResult() {
  try {
    let result = document.getElementById("result").value;
    result = result.replace(/ /g, ""); // Remove spaces
    result = result.replace(/×/g, "*"); // Replace "×" with "*"
    result = result.replace(/÷/g, "/"); // Replace "÷" with "/"
    result = eval(result);
    document.getElementById("result").value = result;
  } catch (error) {
    alert(`Error: ${error.message}`);
    clearResult();
  }
}


document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (/[0-9+\-*/.=]|Enter|Backspace|Delete/.test(key)) {
        event.preventDefault();
        switch (key) {
            case "Enter":
                calculateResult();
                break;
            case "Backspace":
            case "Delete":
                clearResult();
                break;
            default:
                appendToResult(key);
                break;
        }
    }
});
