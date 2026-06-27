document.addEventListener("DOMContentLoaded", () => {
    // 1. Fetch the shared header component
    fetch('../components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load shared header layout.");
            }
            return response.text();
        })
        .then(headerHTML => {
            // 2. Inject it into the empty header tag
            document.querySelector('.main-header').innerHTML = headerHTML;
            
            // 3. Optional: Run any header-specific logic (like mobile menu toggles) here
            console.log("Shared header successfully loaded into Coaches section.");
        })
        .catch(error => console.error("Error rendering navigation component:", error));
});