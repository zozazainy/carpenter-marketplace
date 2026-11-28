
// CRAFTORA - Carpenter Dashboard JavaScript


// 1. SELECT HTML ELEMENTS

const projectsGrid = document.getElementById("projectsGrid");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const availableCount = document.getElementById("availableCount");

const quotationCount = document.getElementById("quotationCount");

const selectedCount = document.getElementById("selectedCount");

const projectCount = document.getElementById("projectCount");


// 2. FURNITURE PROJECT CATEGORIES

const projects = [

    {
        id: 1,
        title: "Custom Bed",
        category: "Bed",
        icon: "🛏️",
        description: "Custom wooden bed design and construction."
    },

    {
        id: 2,
        title: "Custom Wardrobe",
        category: "Wardrobe",
        icon: "🚪",
        description: "Wardrobe design with storage compartments."
    },

    {
        id: 3,
        title: "Study Table",
        category: "Table",
        icon: "🪑",
        description: "Custom study table for home or office."
    },

    {
        id: 4,
        title: "Dining Table",
        category: "Table",
        icon: "🍽️",
        description: "Custom dining table design and construction."
    },

    {
        id: 5,
        title: "Wooden Door",
        category: "Door",
        icon: "🚪",
        description: "Custom wooden door design."
    },

    {
        id: 6,
        title: "Kitchen Cabinet",
        category: "Kitchen Cabinet",
        icon: "🗄️",
        description: "Custom kitchen cabinets and storage units."
    },

    {
        id: 7,
        title: "Office Furniture",
        category: "Office Furniture",
        icon: "🪑",
        description: "Furniture for office and workspace."
    },

    {
        id: 8,
        title: "Center Table",
        category: "Table",
        icon: "🪵",
        description: "Custom center table for living rooms."
    },

    {
        id: 9,
        title: "Other Furniture",
        category: "Other",
        icon: "🪚",
        description: "Other custom furniture requirements."
    }

];


// 3. DASHBOARD COUNTS

availableCount.textContent = projects.length;

quotationCount.textContent = 0;

selectedCount.textContent = 0;


// 4. DISPLAY PROJECTS

function displayProjects(data) {

    projectsGrid.innerHTML = "";

    if (data.length === 0) {

        projectsGrid.innerHTML = `
            <div class="empty-message">
                <h3>No Projects Found</h3>
                <p>Try another search or category.</p>
            </div>
        `;

    }

    else {

        data.forEach(function(project) {

            const card = document.createElement("div");

            card.className = "project-card";

            card.innerHTML = `

                <div class="project-icon">
                    ${project.icon}
                </div>

                <span class="project-category">
                    ${escapeHTML(project.category)}
                </span>

                <h3>${escapeHTML(project.title)}</h3>

                <p>${escapeHTML(project.description)}</p>

                <button class="quote-btn" data-id="${project.id}">
                    View Project
                </button>

            `;

            projectsGrid.appendChild(card);

        });

    }

    projectCount.textContent =
        data.length + (data.length === 1
            ? " project available"
            : " projects available");

}


// 5. SEARCH AND FILTER PROJECTS

function filterProjects() {

    const searchValue = searchInput.value.toLowerCase();

    const categoryValue = categoryFilter.value;

    const filteredProjects = projects.filter(function(project) {

        const matchesSearch =
            project.title.toLowerCase().includes(searchValue) ||
            project.description.toLowerCase().includes(searchValue) ||
            project.category.toLowerCase().includes(searchValue);

        const matchesCategory =
            categoryValue === "" ||
            project.category === categoryValue;

        return matchesSearch && matchesCategory;

    });

    displayProjects(filteredProjects);

}


// 6. SEARCH EVENT

searchInput.addEventListener("input", filterProjects);


// 7. CATEGORY FILTER EVENT

categoryFilter.addEventListener("change", filterProjects);


// 8. VIEW PROJECT BUTTON

projectsGrid.addEventListener("click", function(event) {

    if (event.target.classList.contains("quote-btn")) {

        const projectId = Number(event.target.dataset.id);

        const selectedProject = projects.find(function(project) {
            return project.id === projectId;
        });

        if (selectedProject) {

            alert("Selected Project: " + selectedProject.title);

        }

    }

});


// 9. INITIAL DISPLAY

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, function(character) {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];

    });

}

displayProjects(projects);

console.log("CRAFTORA Dashboard Loaded Successfully!");
