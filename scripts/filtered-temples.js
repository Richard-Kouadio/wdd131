const gallery = document.querySelector(".gallery");
const pageTitle = document.querySelector("#page-title");

function displayTemples(templesList) {

    gallery.innerHTML = "";

    templesList.forEach((temple) => {

        const card = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} square feet`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.append(name, location, dedicated, area, image);

        gallery.appendChild(card);

    });

}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Old";

    displayTemples(
        temples.filter(
            temple => new Date(temple.dedicated).getFullYear() < 1900
        )
    );
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "New";

    displayTemples(
        temples.filter(
            temple => new Date(temple.dedicated).getFullYear() > 2000
        )
    );
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Large";

    displayTemples(
        temples.filter(
            temple => temple.area > 90000
        )
    );
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Small";

    displayTemples(
        temples.filter(
            temple => temple.area < 10000
        )
    );
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;