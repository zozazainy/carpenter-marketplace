
// CRAFTORA Carpenter Dashboard JavaScript


// 1. SELECT HTML ELEMENTS

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const locationFilter = document.getElementById("locationFilter");

const materialFilter = document.getElementById("materialFilter");

const projectCards = document.querySelectorAll(".project-card");

const noProjects = document.getElementById("noProjects");

const totalProjects = document.getElementById("totalProjects");


// 2. SEARCH AND FILTER PROJECTS

function filterProjects() {

    const searchValue = searchInput.value.toLowerCase();

    const selectedCategory = categoryFilter.value;

    const selectedLocation = locationFilter.value;

    const selectedMaterial = materialFilter.value;

    let visibleProjects = 0;


    projectCards.forEach(function(card) {

        const category = card.dataset.category;

        const location = card.dataset.location;

        const material = card.dataset.material;

        const cardText = card.textContent.toLowerCase();


        const matchesSearch = cardText.includes(searchValue);

        const matchesCategory =
            selectedCategory === "" || category === selectedCategory;

        const matchesLocation =
            selectedLocation === "" || location === selectedLocation;

        const matchesMaterial =
            selectedMaterial === "" || material === selectedMaterial;


        if (
            matchesSearch &&
            matchesCategory &&
            matchesLocation &&
            matchesMaterial
        ) {

            card.style.display = "block";

            visibleProjects++;

        } else {

            card.style.display = "none";

        }

    });


    // Update project count

    totalProjects.textContent = visibleProjects;


    // Display message if no projects are found

    if (visibleProjects === 0) {

        noProjects.style.display = "block";

    } else {

        noProjects.style.display = "none";

    }

}


// 3. ADD EVENT LISTENERS TO FILTERS

searchInput.addEventListener("input", filterProjects);

categoryFilter.addEventListener("change", filterProjects);

locationFilter.addEventListener("change", filterProjects);

materialFilter.addEventListener("change", filterProjects);


// 4. SUBMIT QUOTATION

const quoteButtons = document.querySelectorAll(".quote-btn");

quoteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const projectCard = button.closest(".project-card");

        const projectName = projectCard.querySelector("h3").textContent;


        const price = prompt(
            "Enter your quotation amount in PKR for: " + projectName
        );

        if (price === null || price.trim() === "") {
            return;
        }

        const amount = Number(price);

        if (!Number.isFinite(amount) || amount <= 0) {

            alert("Please enter a valid quotation amount.");

            return;

        }


        const completionTime = prompt(
            "Enter estimated completion time in days:"
        );

        if (completionTime === null || completionTime.trim() === "") {
            return;
        }

        const days = Number(completionTime);

        if (!Number.isInteger(days) || days <= 0) {

            alert("Please enter a valid number of days.");

            return;

        }


        alert(
            "Quotation prepared successfully!\n\n" +
            "Project: " + projectName +
            "\nYour Price: PKR " + amount.toLocaleString("en-PK") +
            "\nCompletion Time: " + days + " days"
        );

    });

});


// 5. DISPLAY INITIAL PROJECT COUNT

filterProjects();
