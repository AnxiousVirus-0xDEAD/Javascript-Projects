//  JavaScript based on sample_portfolio.js

// Get all the links in the navigation
const navLinks = document.querySelectorAll('nav ul li a');

// Get all the sections
const sections = document.querySelectorAll('section');

// Function to highlight the active section in the navigation
function updateActiveNavLink() {
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
}

// Add smooth scrolling to the links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Add event listener for scroll
window.addEventListener('scroll', updateActiveNavLink);
