window.addEventListener("load", function () {
    // Select the second figure
    var secondFigure = document.querySelector("#thumbs figure:nth-child(2)");

    // Get the caption text from the second figure
    var captionText = secondFigure.querySelector("figcaption").textContent;

    // Show an alert box with the caption text
    alert(captionText);
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all thumbnail images
    var thumbnails = document.querySelectorAll(".thumbnail");

    // Select the display div
    var displayDiv = document.getElementById("display");

    // Attach event listeners to each thumbnail image
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("mouseover", function () {
            // Get the src and alt attributes of the hovered image
            var src = thumbnail.getAttribute("src");
            var alt = thumbnail.getAttribute("alt");

            // Change the background image of the display div
            displayDiv.style.backgroundImage = `url(${src})`;

            // Show the alt text in the display div
            displayDiv.textContent = alt;

            // Hide the hovered image but keep its space
            thumbnail.style.visibility = "hidden";
        });

        thumbnail.addEventListener("onfocus", function () {
            // Get the src and alt attributes of the hovered image
            var src = thumbnail.getAttribute("src");
            var alt = thumbnail.getAttribute("alt");

            // Change the background image of the display div
            displayDiv.style.backgroundImage = `url(${src})`;

            // Show the alt text in the display div
            displayDiv.textContent = alt;

            // Hide the hovered image but keep its space
            thumbnail.style.visibility = "hidden";
        });

        // Restore visibility when mouse leaves the thumbnail
        thumbnail.addEventListener("mouseleave", function () {
            thumbnail.style.visibility = "visible";
        });

        thumbnail.addEventListener("focusput", function () {
            thumbnail.style.visibility = "visible";
        });

        
    });
});