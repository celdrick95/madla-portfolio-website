(function () {
    emailjs.init({
        publicKey: "bSVl-UKzpPTDxrPXA"
    });
})();

window.onload = function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_fgqjpcj", "template_myutp8c", templateParams)
            .then((response) => {
                alert("Email sent successfully!");
                console.log("SUCCESS:", response);
            })
            .catch((error) => {
                alert("Failed to send email");
                console.error("ERROR:", error);
            });
    });
};