const menuButton = document.querySelector("#menuButton");

const navMenu = document.querySelector("#navMenu");



menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("open");


    if (navMenu.classList.contains("open")) {

        menuButton.textContent = "❎";

    }

    else {

        menuButton.textContent = "☰";

    }

});





const currentYear = new Date().getFullYear();


document.querySelector("#currentyear").textContent = currentYear;



document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;