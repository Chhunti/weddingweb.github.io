function playShortVideo() {
    const entrance = document.getElementById("entrance");
    const bgVideo = document.getElementById('bg-video');
    const shortContainer = document.getElementById("short-video-container");
    const shortVideo = document.getElementById("short-video");

    // 1. Hide the entrance content
    if (entrance) entrance.classList.add("fade-out");

    // 2. After fade-out, show and play the short video
    setTimeout(() => {
        if (bgVideo) bgVideo.pause(); 
        if (entrance) entrance.style.display = "none";
        
        if (shortContainer) {
            shortContainer.style.display = "flex";
            // IMPORTANT: Play the short video
            if (shortVideo) shortVideo.play().catch(error => console.error("Error playing short video:", error));
        }
    }, 900);

    // 3. After the short video ends, transition to the main page
    if (shortVideo) {
        shortVideo.onended = () => {
            // Fade out the short video
            if (shortContainer) shortContainer.classList.add("fade-out");
            
            setTimeout(() => {
                // Remove the body class that locks scrolling, enabling the main site view
                document.body.classList.remove("entrance-active"); 
                if (shortContainer) shortContainer.style.display = "none";
                
                // Scroll smoothly to the main hero section
                const homeSection = document.getElementById('home');
                if (homeSection) {
                    homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                
                // Clean up the temporary fade class
                if (shortContainer) shortContainer.classList.remove("fade-out");
                
            }, 1000); 
        };
    }
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // FIX: Attach the event listener here instead of using inline onclick,
    // ensuring the function is defined and the DOM element is available.
    const enterBtn = document.getElementById('enter-website-btn');
    if (enterBtn) {
        enterBtn.addEventListener('click', playShortVideo);
    }

    // Countdown Timer Logic
    function updateCountdown() {
        const weddingDate = new Date('October 14, 2024 15:00:00').getTime();
        const now = new Date().getTime();
        const timeRemaining = weddingDate - now;
        
        const daysElement = document.getElementById('days');
        
        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            
            if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
            if (document.getElementById('hours')) document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            if (document.getElementById('minutes')) document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            if (document.getElementById('seconds')) document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else if (daysElement) {
            const countdownContainer = document.querySelector('.countdown');
            if (countdownContainer) {
                countdownContainer.innerHTML = '<h3>We\'re Married!</h3>';
            }
        }
    }
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // RSVP Form Submission
    const rsvpForm = document.getElementById('rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[type="text"]');
            const name = nameInput ? nameInput.value : 'Guest';
            
            console.log(`Thank you, ${name}! Your RSVP has been submitted.`);
            // In a real application, replace this console log with a modal or success message UI
            
            this.reset();
        });
    }
    
    // Lazy loading for images (Intersection Observer) - requires image data-src attributes to work fully
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src; // Set the real source from data-src
                }
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px 50px 0px'
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));

});
