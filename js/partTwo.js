// HTML Values
const pageBackgroundColor = document.getElementById("pageBackground");
const buttonColorText = document.getElementById("buttonColorText");
const buttonAction = document.getElementById("buttonAction");

// Function
function colorCheck() {
    if (pageBackgroundColor.classList.contains("container")) {
        pageBackgroundColor.classList.replace("container", "container-alt");
        buttonColorText.textContent = "darkblue";
    } else {
        pageBackgroundColor.classList.replace("container-alt", "container");
        buttonColorText.textContent = "red";
    };
};

// Event
buttonAction.addEventListener("click", colorCheck);