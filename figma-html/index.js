// buton join group leave group code------------
function toggleButtons() {

    var adminBtn = document.getElementById('adminBtn');
    var joinBtn = document.getElementById('joinBtn');
    // Toggle visibility of the Join Group button
    joinBtn.style.display = joinBtn.style.display === 'none' ? 'inline-block' : 'none';
}

//--------------- Get the modal-----------------
var modal = document.getElementById("myModal");
var modalsignin = document.getElementById("myModalsignin");
// Get the link that opens the modal
var signupLink = document.getElementById("signup-link");
var signinLink = document.getElementById("signin-link");
// Get the <span> element that closes the modal
var closeButtons = document.getElementsByClassName(".modal-content .close");

// When the user clicks the link, open the modal 
signupLink.onclick = function() {

    modal.style.display = "block";
}
signinLink.onclick = function() {

    modalsignin.style.display = "block";
}


var closeButtons = document.querySelectorAll(".modal-content .close");

closeButtons.forEach(function(button) {

    button.addEventListener("click", function() {
        var modal = this.closest(".modal");
        modal.style.display = "none";
    });
});

window.onclick = function(event) {

    if (event.target == modal || event.target == modalsignin) {
        modal.style.display = "none";
        modalsignin.style.display = "none";
    }
}

// JavaScript code to handle the click event for the "Create new" link in the signin modal
document.addEventListener("DOMContentLoaded", function() {
    var createNewLinkInSignIn = document.getElementById("signup-link-in-signin");

    createNewLinkInSignIn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of the link
        var signinModal = document.getElementById("myModalsignin");
        signinModal.style.display = "none"; // Hide the signin modal
        var signupModal = document.getElementById("myModal");
        signupModal.style.display = "block"; // Show the signup modal
    });
});



