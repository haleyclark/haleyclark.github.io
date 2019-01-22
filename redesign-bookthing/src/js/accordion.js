let accordionTriggers = document.querySelectorAll(".js-accordion__trigger"); // Get all elements with our js-* prefix class as a variable
let accordionContent = document.querySelectorAll(".js-accordion__content"); // Get all elements with our js-* prefix class as a variable

for (i = 0; i < accordionTriggers.length; i++) {
    // Add click event to each tab to run the showAccordionContent function
    accordionTriggers[i].addEventListener("click", showAccordionContent);
}

function showAccordionContent(el) { // Runs when accordion button is clicked
    let triggers2 = document.querySelectorAll(".js-accordion__trigger"); // Get trigger buttons again as a different variable
    for (i = 0; i < triggers2.length; i++) {
        triggers2[i].setAttribute("aria-expanded", "false");
    } // Reset all buttons to aria-expanded=false
    el.target.setAttribute("aria-expanded", "true"); // Set aria-expanded=true for clicked button
    let accordionToOpen = el.target.getAttribute("aria-controls"); // Get the aria-controls value of the button that was clicked
    for (i = 0; i < accordionContent.length; i++) {
        accordionContent[i].style.display = "none";
    } // Hide all content
    document.getElementById(accordionToOpen).style.display = "block"; // Show content for button that was clicked
}
