    const footer = document.getElementById("footer");
    const toggleButton = document.getElementById("toggle-button");

    toggleButton.addEventListener("click", function() {
        // Toggle the 'collapsed' class on the footer
        footer.classList.toggle("collapsed");
        
        // Update button text based on footer state
        if (footer.classList.contains("collapsed")) {
            toggleButton.textContent = "Show";
        } else {
            toggleButton.textContent = "Hide";
        }
    });
