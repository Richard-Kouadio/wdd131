// Healthy Living Hub JavaScript


// Current year in footer

function displayYear() {

    const year = new Date().getFullYear();

    const yearElement = document.querySelector("#currentyear");


    if (yearElement) {

        yearElement.textContent = year;

    }

}




// Healthy recipe data object and array

const healthyRecipes = [

    {
        name: "Fruit Smoothie",
        calories: 220,
        category: "Breakfast"
    },


    {
        name: "Garden Salad",
        calories: 350,
        category: "Lunch"
    },


    {
        name: "Healthy Oatmeal",
        calories: 300,
        category: "Breakfast"
    },


    {
        name: "Grilled Chicken Plate",
        calories: 450,
        category: "Dinner"
    }

];






// Display recipe information dynamically

function displayRecipes() {


    const recipeContainer = document.querySelector("#dynamic-recipes");


    if (recipeContainer) {


        recipeContainer.innerHTML = healthyRecipes.map(recipe =>

            `

            <article class="card">

                <h3>${recipe.name}</h3>

                <p>
                    Category: ${recipe.category}
                </p>

                <p>
                    Calories: ${recipe.calories} kcal
                </p>

            </article>

            `

        ).join("");

    }


}







// Filter recipes using array method

function showHealthyRecipes() {


    const healthy = healthyRecipes.filter(recipe => recipe.calories < 400);


    console.log(healthy);


}







// Save favorite recipe using localStorage

function saveFavoriteRecipe() {


    const favoriteRecipe = healthyRecipes[0];


    localStorage.setItem(

        "favoriteRecipe",

        favoriteRecipe.name

    );


}







// Load saved favorite recipe

function loadFavoriteRecipe() {


    const savedRecipe = localStorage.getItem("favoriteRecipe");


    const message = document.querySelector("#favorite-message");



    if (message) {


        if (savedRecipe) {


            message.textContent =
                `Your favorite recipe is ${savedRecipe}.`;


        } else {


            message.textContent =
                "You have not selected a favorite recipe yet.";

        }


    }


}







// Contact form handling

function handleFormSubmit() {


    const form = document.querySelector("#contact-form");


    const formMessage = document.querySelector("#form-message");



    if (form) {


        form.addEventListener("submit", function (event) {


            event.preventDefault();



            const name =
                document.querySelector("#name").value;



            if (name.length > 0) {


                formMessage.textContent =
                    `Thank you ${name}! Your message has been received.`;


                localStorage.setItem(

                    "visitorName",

                    name

                );


            } else {


                formMessage.textContent =
                    "Please enter your name before submitting.";

            }


            form.reset();


        });


    }


}







// Welcome message using stored user information

function welcomeVisitor() {


    const visitor =
        localStorage.getItem("visitorName");


    const welcome =
        document.querySelector("#welcome-message");



    if (welcome) {


        if (visitor) {


            welcome.textContent =
                `Welcome back, ${visitor}! Enjoy Healthy Living Hub.`;

        } else {


            welcome.textContent =
                "Welcome to Healthy Living Hub!";

        }


    }


}








// Button event listener

function setupFavoriteButton() {


    const favoriteButton =
        document.querySelector("#favorite-button");



    if (favoriteButton) {


        favoriteButton.addEventListener(

            "click",

            saveFavoriteRecipe

        );


    }


}








// Run all functions when page loads

document.addEventListener("DOMContentLoaded", () => {


    displayYear();


    displayRecipes();


    showHealthyRecipes();


    loadFavoriteRecipe();


    handleFormSubmit();


    welcomeVisitor();


    setupFavoriteButton();



});