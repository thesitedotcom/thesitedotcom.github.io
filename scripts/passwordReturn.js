// Check if the user is authenticated
        if (sessionStorage.getItem("authenticated") !== "true") {
            // Redirect to the password entry page
            window.location.href = "/password";
        }
