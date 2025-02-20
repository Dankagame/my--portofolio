document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Form validation
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = this.querySelector("input[type='text']").value.trim();
        const email = this.querySelector("input[type='email']").value.trim();
        const message = this.querySelector("textarea").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }
        alert("Message sent successfully!");
        this.reset();
    });
});
