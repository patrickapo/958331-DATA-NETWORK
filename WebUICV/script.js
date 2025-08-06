// Contact information display
const showContact = () => {
    const contactInfo = `📧 Email: patsiedlowski@email.com
📱 Phone: +66947433234
📍 Location: Chiang Mai, Thailand`;
    
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
        'patrick.png',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
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
    const profilePhoto = document.getElementById('profilePhoto');
    const skillsContainer = document.querySelector('.skills-container');
    
    if (viewContactBtn) {
        viewContactBtn.addEventListener('click', showContact);
    }
    
    if (profilePhoto) {
        profilePhoto.addEventListener('click', handleProfilePhotoClick);
    }
    
    if (skillsContainer) {
        skillsContainer.addEventListener('click', handleSkillClick);
    }
    
    // Add scroll animations
    addScrollAnimation();
    
    // Welcome message
    setTimeout(() => {
        alert(`Welcome to Patrick's Interactive CV! 🎉

Features:
• Click on skills to learn more
• Click "View Contact" for contact info  
• Click the profile photo to change it
• Use Ctrl+C for contact info`);
    }, 1000);
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

// Add some extra interactivity - skill badge hover effects
document.addEventListener('DOMContentLoaded', () => {
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Smooth scrolling for better user experience
const smoothScroll = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
};

// Initialize smooth scrolling
document.addEventListener('DOMContentLoaded', smoothScroll);