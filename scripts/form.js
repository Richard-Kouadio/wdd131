const products = [
    {
        id: "p001",
        name: "Smart Watch"
    },

    {
        id: "p002",
        name: "Fitness Tracker"
    },

    {
        id: "p003",
        name: "Water Bottle"
    },

    {
        id: "p004",
        name: "Running Shoes"
    }
];


const productSelect = document.querySelector("#product");


products.forEach(product => {

    let option = document.createElement("option");

    option.value = product.name;

    option.textContent = product.name;

    productSelect.appendChild(option);

});