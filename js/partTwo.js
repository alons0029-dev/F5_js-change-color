// Values
const pageBackgroundColor = document.getElementById("pageBackground");
const buttonColorText = document.getElementById("buttonColorText");
const buttonAction = document.getElementById("buttonAction");
const pageBackgroundColorValue = pageBackgroundColor.tostring();

// Event
buttonAction.addEventListener("click", () => {
    if (pageBackgroundColorValue === "red") {
        pageBackgroundColor.classList.replace("container", "container-alt");
        buttonColorText.textContent = "darkblue";
    } else if (pageBackgroundColorValue === "darkblue") {
        pageBackgroundColor.classList.replace("container-alt", "container");
        buttonColorText.textContent = "darkblue";
    } else {
        alert("Something went wrong!");
    };
});