
// ===================================
// 1. SELECT HTML ELEMENTS
// ===================================

const projectForm = document.querySelector("#projectForm");
const imagesInput = document.querySelector("#images");
const imagePreview = document.querySelector("#imagePreview");
const message = document.querySelector("#message");


// ===================================
// 2. IMAGE UPLOAD AND PREVIEW
// ===================================

let selectedFiles = [];

imagesInput.addEventListener("change", function () {

    const newFiles = Array.from(imagesInput.files);

    // Check maximum 5 images
    if (selectedFiles.length + newFiles.length > 5) {
        alert("You can upload a maximum of 5 images.");
        imagesInput.value = "";
        return;
    }

    // Check image type and file size
    for (const file of newFiles) {

        if (!file.type.startsWith("image/")) {
            alert("Please select image files only.");
            imagesInput.value = "";
            return;
        }

        // Maximum 5 MB per image
        if (file.size > 5 * 1024 * 1024) {
            alert("Each image must be smaller than 5 MB.");
            imagesInput.value = "";
            return;
        }
    }

    // Add selected images
    selectedFiles.push(...newFiles);

    displayImages();

    // Allow selecting the same file again
    imagesInput.value = "";

});


// ===================================
// 3. DISPLAY IMAGE PREVIEWS
// ===================================

function displayImages() {

    imagePreview.innerHTML = "";

    selectedFiles.forEach(function (file, index) {

        // Create image container
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("preview-item");

        // Create image
        const image = document.createElement("img");

        image.src = URL.createObjectURL(file);
        image.alt = "Furniture reference image";

        // Create remove button
        const removeButton = document.createElement("button");

        removeButton.type = "button";
        removeButton.textContent = "×";
        removeButton.classList.add("remove-image");

        // Remove selected image
        removeButton.addEventListener("click", function () {

            selectedFiles.splice(index, 1);

            displayImages();

        });

        // Add elements
        imageContainer.appendChild(image);
        imageContainer.appendChild(removeButton);

        imagePreview.appendChild(imageContainer);

    });

}


// ===================================
// 4. FORM VALIDATION
// ===================================

projectForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Check required fields
    if (!projectForm.checkValidity()) {

        projectForm.reportValidity();

        return;

    }

    // Display success message
    message.textContent =
        "Your project details are valid!";

    message.style.color = "green";

    // Display uploaded image count
    console.log("Selected images:", selectedFiles);

    console.log("Project form is valid.");

});
