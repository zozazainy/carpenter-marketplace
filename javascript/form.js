
// CRAFTORA - Customer Project Form JavaScript


// 1. SELECT FORM ELEMENTS

const projectForm = document.getElementById("projectForm");

const category = document.getElementById("category");

const customCategory = document.getElementById("customCategory");

const referenceImage = document.getElementById("referenceImage");


// 2. HANDLE OTHER FURNITURE CATEGORY

category.addEventListener("change", function() {

    if (category.value === "Other") {

        customCategory.required = true;
        customCategory.placeholder = "Please specify furniture type";

    } else {

        customCategory.required = false;
        customCategory.value = "";
        customCategory.placeholder = "Enter another furniture type";

    }

});


// 3. PREVIEW REFERENCE IMAGE

referenceImage.addEventListener("change", function() {

    const file = referenceImage.files[0];

    if (file) {

        if (!file.type.startsWith("image/")) {

            alert("Please select a valid image file.");

            referenceImage.value = "";

            return;

        }

        const imageURL = URL.createObjectURL(file);

        const imagePreview = document.createElement("img");

        imagePreview.src = imageURL;
        imagePreview.alt = "Furniture Reference Image";

        imagePreview.style.width = "200px";
        imagePreview.style.marginTop = "10px";
        imagePreview.style.borderRadius = "8px";

        // Remove previous preview

        const oldPreview = document.getElementById("imagePreview");

        if (oldPreview) {

            oldPreview.remove();

        }

        imagePreview.id = "imagePreview";

        referenceImage.parentElement.appendChild(imagePreview);

    }

});


// 4. HANDLE FORM SUBMISSION

projectForm.addEventListener("submit", function(event) {

    // Prevent page reload

    event.preventDefault();


    // Get form values

    const name = document.getElementById("customerName").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const location = document.getElementById("location").value.trim();

    const furnitureCategory = category.value === "Other"
        ? customCategory.value.trim()
        : category.value;

    const length = Number(document.getElementById("length").value);

    const width = Number(document.getElementById("width").value);

    const height = Number(document.getElementById("height").value);


    // Validate dimensions

    if (length <= 0 || width <= 0 || height <= 0) {

        alert("Please enter valid furniture dimensions.");

        return;

    }


    // Display submission confirmation

    alert(
        "Your project has been submitted successfully!\n\n" +

        "Customer Name: " + name + "\n" +

        "Phone: " + phone + "\n" +

        "Location: " + location + "\n" +

        "Furniture Category: " + furnitureCategory + "\n" +

        "Dimensions: " + length + " × " + width + " × " + height

    );


    // Reset form after submission

    projectForm.reset();

    customCategory.required = false;

    const imagePreview = document.getElementById("imagePreview");

    if (imagePreview) {

        imagePreview.remove();

    }

});


// 5. HANDLE FORM RESET

projectForm.addEventListener("reset", function() {

    customCategory.required = false;

    const imagePreview = document.getElementById("imagePreview");

    if (imagePreview) {

        imagePreview.remove();

    }

});


console.log("CRAFTORA Form JavaScript Loaded Successfully!");
