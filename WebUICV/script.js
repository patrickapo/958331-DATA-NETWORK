// Contact information display
const showContact = () => {
    const contactInfo = `Email: patsiedlowski@email.com
Phone: +66947433234
Location: Chiang Mai, Thailand`;
    
    alert(contactInfo);
};

// CV download simulation
const downloadCV = () => {
    // Create a simple text content for the CV
    const cvContent = `JOHN SMITH - FULL STACK WEB DEVELOPER
=====================================

EDUCATION:
- Bachelor of Science in Computer Science, University of Technology (2020-2024)
- Full Stack Web Development Certification, Tech Academy (2023)

SKILLS:
HTML5, CSS3, JavaScript, Bootstrap, React, Node.js, MongoDB, Git, AWS, UI/UX Design

CONTACT:
Email: john.smith@email.com
Phone: +1 (555) 123-4567
LinkedIn: linkedin.com/in/johnsmith
GitHub: github.com/johnsmith
Location: New York, NY`;

    // Create and download the file
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'John_Smith_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    // Show confirmation
    alert('CV downloaded successfully! 📄');
};

// Skill badge click interaction
const handleSkillClick = (event) => {
    if (event.target.classList.contains('skill-badge')) {
        const skill = event.target.textContent.trim();
        alert(`You clicked on: ${skill} 🚀`);
        
        // Add a fun animation
        event.target.style.transform = 'scale(1.2) rotate(5deg)';
        setTimeout(() => {
            event.target.style.transform = '';
        }, 300);
    }
};

// Profile photo click interaction
const handleProfilePhotoClick = () => {
    const photos = [
        'patrick.png'
    ];
    
    const profilePhoto = document.getElementById('profilePhoto');
    const currentSrc = profilePhoto.src;
    const currentIndex = photos.findIndex(photo => currentSrc.includes(photo.split('?')[0].split('/').pop()));
    const nextIndex = (currentIndex + 1) % photos.length;
    
    profilePhoto.src = photos[nextIndex];
    alert('Profile photo updated! Click again to cycle through more photos. 📸');
};

// Add smooth scroll effect for sections
const addScrollAnimation = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.education-item').forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
};

// Initialize all event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Button event listeners
    const viewContactBtn = document.getElementById('viewContactBtn');
    
    if (viewContactBtn) {
        viewContactBtn.addEventListener('click', showContact);
    }
    
    // Add scroll animations
    addScrollAnimation();
});

// Add keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey) {
        switch(event.key) {
            case 'c':
                event.preventDefault();
                showContact();
                break;
        }
    }
});

// Smooth scrolling for better user experience
const smoothScroll = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
};

// Initialize smooth scrolling
document.addEventListener('DOMContentLoaded', smoothScroll);