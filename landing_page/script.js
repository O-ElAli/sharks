document.addEventListener("DOMContentLoaded", () => {
    // 1. Set current system date inside Registration field automatically
    const regDateField = document.getElementById("reg-date");
    if (regDateField) {
        const today = new Date().toISOString().split("T")[0];
        regDateField.value = today;
    }

    // 2. Add visual feedback behavior to Navbar links
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", function() {
            navItems.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // 3. Form intercept processing loop
    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); 

            const swimmerName = document.getElementById("fullname").value;
            const signatureValue = document.getElementById("signature").value;

            if (!signatureValue.trim()) {
                alert("Please provide a name signature confirmation before saving.");
                return;
            }

            // Client feedback notice
            alert(`🦈 Form received successfully!\nWelcome to the Sharks Swim Team, ${swimmerName}.`);
            
            // Clean slate field restoration loop
            form.reset();
            if (regDateField) {
                regDateField.value = new Date().toISOString().split("T")[0];
            }
        });
    }
});