
function toggleMenu() {
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
}

function closeMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}


function showRoutineDetails(routineType) {
    var routineTitles = {
        morning: "Morning Routine",
        evening: "Evening Routine", 
        weekly: "Weekly Routine"
    };
    
    var routineInfo = {
        morning: "Start your day with cleansing, serum, moisturizer, and sunscreen!",
        evening: "Evening routine focuses on double cleansing and overnight repair.",
        weekly: "Weekly treatments include masks and exfoliation for deep care."
    };
    
    alert(routineTitles[routineType] + "\n\n" + routineInfo[routineType]);
}

function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');
    
    
    if (name.value.trim() === '' || email.value.trim() === '' || 
        subject.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all fields');
        return false;
    }
    
    
    if (email.value.indexOf('@') === -1) {
        alert('Please enter a valid email address');
        return false;
    }
    
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contactForm').reset();
    return false; // Prevent actual form submission
}


function initWebsite() {
    // Set up hamburger menu
    var hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
    
    
    var routineButtons = document.querySelectorAll('.routine-btn');
    for (var i = 0; i < routineButtons.length; i++) {
        routineButtons[i].addEventListener('click', function() {
            var routineType = this.getAttribute('data-routine');
            showRoutineDetails(routineType);
        });
    }
    
    
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = validateForm;
    }
    
    
    var navLinks = document.querySelectorAll('.nav-link');
    for (var j = 0; j < navLinks.length; j++) {
        navLinks[j].addEventListener('click', closeMobileMenu);
    }
}


document.addEventListener('DOMContentLoaded', initWebsite);

