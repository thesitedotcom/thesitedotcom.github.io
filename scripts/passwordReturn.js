// Check if the user is authenticated
        if (sessionStorage.getItem("authenticated") !== "true") {
            // Redirect to the password entry page
            window.location.href = "/password";
        }

        // Function to handle the keydown event
        function handleKeyDown(event) {
            // Check if the pressed key is Escape
            if (event.key === "Escape") {
                // Open a new URL in a new window
                window.open("https://classroom.google.com/?authuser=0", "_blank", 'noopener,noreferrer');
                // Close the current window
                window.close();
            }
        }

        // Add event listener for keydown event
        document.addEventListener("keydown", handleKeyDown);
