var hamburgerColors = ['#fff', '#280303']; // Array for color for hamburger
var currentColorIndex = 0;

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("mk-logo-mobile");
    var menuBackground = "url('images/texture.jpg')";
    var defaultBackground = "none";
    var hamburgerIcon = document.querySelector('.menu-icon div');

    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
        menu.style.backgroundImage = defaultBackground;
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
        menu.style.backgroundImage = menuBackground;
    }

    currentColorIndex = (currentColorIndex + 1) % hamburgerColors.length;
    hamburgerIcon.style.color = hamburgerColors[currentColorIndex];
}

// For feedback

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const feedback = document.getElementById('feedbackText').value.trim();

    if (feedback === "") {
        alert("Please enter your feedback before submitting.");
        return;
    }

    console.log("Feedback Submitted: ", feedback);

    localStorage.setItem("userFeedback", feedback);

    alert("Thank you for your feedback!");

    // document.getElementById('feedbackForm').reset();

    clearTextarea();
});


function clearTextarea() {
    document.getElementById('feedbackText').value = '';  // Clears the textarea
}