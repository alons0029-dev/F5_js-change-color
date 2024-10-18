// Values
const pageBackgroundColor = document.getElementById("pageBackground");
const buttonColorText = document.getElementById("buttonColorText");
const buttonAction = document.getElementById("buttonAction");

// Event
buttonAction.addEventListener("click", () => {
    pageBackgroundColor.classList.replace("container", "container-alt");
    buttonColorText.textContent = "darkblue";
});