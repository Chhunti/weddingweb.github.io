/* Base Styles for Entrance Video and Frame */
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: var(--font-body);
}

/* This class keeps the scrollbar hidden until the entrance is complete */
body.entrance-active {
    overflow: hidden;
}

/* Background Video */
#bg-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2; /* Below the entrance frame */
    filter: brightness(50%);
}

/* Golden Frame */
.frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 60px 40px;
    /* Custom ornate border to mimic the photo */
    border: 12px solid var(--primary-color);
    border-image: linear-gradient(45deg, gold, #d4af37, #ffe0b2, gold) 1;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    text-align: center;
    color: var(--white);
    z-index: 10;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 0 50px rgba(212, 165, 116, 0.5);
    transition: all 1s ease;
}

/* Text styles matching the photo's look */
.monogram {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 1px solid var(--primary-color);
    border-radius: 50%;
}

.monogram-center {
    font-family: var(--font-script);
    font-size: 3rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 25px;
}

.khmer-text {
    font-family: var(--font-heading); /* Placeholder font, replace with Khmer font link if available */
    color: var(--primary-color);
    font-weight: 500;
    margin: 10px 0;
    line-height: 1.2;
}

.text-xl { font-size: 2rem; }
.text-lg { font-size: 1.5rem; }
.sub-text { margin-bottom: 30px; }

.couple-name {
    font-family: var(--font-script);
    font-size: 1.8rem;
    color: var(--white);
    margin: 15px 0 30px;
}

.flourish-divider {
    color: var(--primary-color);
    font-size: 3rem;
    margin: 30px 0;
    transform: scaleX(1.5);
}

.enter-btn {
    padding: 12px 28px;
    background: var(--primary-color);
    color: var(--dark-color);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.enter-btn:hover {
    background: #ffe0b2;
    transform: scale(1.05);
}

/* Fade Transition for entrance screen */
.fade-out {
    animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
    to { opacity: 0; }
}

/* Hidden Short Video Overlay */
#short-video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 50;
}

#short-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* --- The rest of the website styles remain below --- */

/* Reset & Base Styles for Main Site */
*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #d4a574;
    --secondary-color: #8b7355;
    --accent-color: #e8d0b3;
    --dark-color: #2c2c2c;
    --light-color: #f9f5f0;
    --text-color: #333;
    --text-light: #777;
    --white: #ffffff;
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Montserrat', sans-serif;
    --font-script: 'Dancing Script', cursive;
    --transition: all 0.3s ease;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 100px 0;
    background-color: var(--light-color);
    position: relative;
    z-index: 10;
}

/* NOTE: Ensure main content is visible when transition finishes */
#main-content {
    /* Initially hidden behind the entrance screen, becomes visible after transition */
    position: relative;
    z-index: 5;
    /* Optional: Hide main content parts initially if they peek through */
    /* display: none; */ 
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-title {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 600;
    color: var(--dark-color);
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background-color: var(--primary-color);
}

.section-subtitle {
    font-size: 1.2rem;
    color: var(--text-light);
    font-weight: 300;
    margin-top: 20px;
}

.btn {
    display: inline-block;
    background-color: var(--primary-color);
    color: var(--white);
    padding: 15px 40px;
    border: none;
    border-radius: var(--border-radius);
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
}

.btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: var(--shadow);
}


/* --- Video Styling using the Class Selector --- */
.hero .bg-video {
    /* 1. Positioning */
    position: fixed;	
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);	
    
    /* 2. Sizing and Coverage */
    min-width: 100%;	
    min-height: 100%;	
    width: auto;
    height: auto;
    z-index: -100; /* Send the video behind all other content */
    
    /* 3. Optional: Visual Adjustments */
    filter: brightness(50%);	
}

/* --- Content Styling --- */
.content {
    position: relative;	
    z-index: 100;	
    color: white;
    padding: 20px;
    text-align: center;
}

/* Hero Section */
.hero {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
    position: relative;
    /* Ensure hero content is above video overlay */
    z-index: 2; 
    /* The main video background is tied to the .hero section in this setup */
    background: #000; 
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 0 20px;
}

.hero-title {
    font-family: var(--font-script);
    font-size: 5rem;
    margin-bottom: 20px;
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 3px;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.hero-date {
    font-size: 1.8rem;
    font-family: var(--font-heading);
    margin-bottom: 40px;
    font-weight: 500;
}

.countdown {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
}

.countdown-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius);
    padding: 20px;
    min-width: 100px;
}

.countdown-item span {
    font-size: 2.5rem;
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
}

.countdown-item p {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
}

.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

.scroll-indicator i {
    font-size: 1.5rem;
    color: var(--white);
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) translateX(-50%);
    }
    40% {
        transform: translateY(-10px) translateX(-50%);
    }
    60% {
        transform: translateY(-5px) translateX(-50%);
    }
}

/* Couple Section */
.couple-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-wrap: wrap;
}

.couple-card {
    flex: 1;
    min-width: 300px;
    max-width: 400px;
    text-align: center;
}

.couple-image {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 30px;
    border: 8px solid var(--white);
    box-shadow: var(--shadow);
}

.couple-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.couple-image:hover img {
    transform: scale(1.1);
}

.couple-card h3 {
    font-family: var(--font-heading);
    font-size: 2rem;
    margin-bottom: 15px;
    color: var(--dark-color);
}

.couple-card p {
    color: var(--text-light);
    line-height: 1.8;
}

.heart-divider {
    font-size: 3rem;
    color: var(--primary-color);
    animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

/* Story Section */
.story-timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.story-timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--accent-color);
    transform: translateX(-50%);
}

.story-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    position: relative;
}

.story-item:nth-child(odd) {
    flex-direction: row-reverse;
}

.story-date {
    flex: 1;
    text-align: right;
    padding-right: 40px;
    font-family: var(--font-heading);
    font-size: 1.3rem;
    color: var(--primary-color);
    font-weight: 600;
}

.story-item:nth-child(odd) .story-date {
    text-align: left;
    padding-right: 0;
    padding-left: 40px;
}

.story-content {
    flex: 1;
    background-color: var(--white);
    padding: 30px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    position: relative;
    z-index: 1;
}

.story-item:nth-child(even) .story-content {
    margin-left: 40px;
}

.story-item:nth-child(odd) .story-content {
    margin-right: 40px;
}

.story-content h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--dark-color);
}

.story-content p {
    color: var(--text-light);
}

/* Details Section */
.details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.detail-card {
    background-color: var(--white);
    padding: 40px 30px;
    text-align: center;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.detail-card:hover {
    transform: translateY(-10px);
}

.detail-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.detail-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--dark-color);
}

.detail-card p {
    color: var(--text-light);
    margin-bottom: 5px;
}

/* Gallery Section */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.gallery-item {
    height: 300px;
    border-radius: var(--border-radius);
    overflow: hidden;
    position: relative;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* RSVP Section */
.rsvp-section {
    background-color: var(--accent-color);
}

.rsvp-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 40px;
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 25px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    font-family: var(--font-body);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(212, 165, 116, 0.2);
}

.form-group textarea {
    resize: vertical;
}

/* Gifts Section */
.gifts-section {
    background-color: var(--light-color);
}

.registry-logos {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.registry-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--text-color);
    transition: var(--transition);
}

.registry-logo:hover {
    color: var(--primary-color);
    transform: translateY(-5px);
}

.registry-logo i {
    font-size: 3rem;
    margin-bottom: 15px;
}

.registry-logo span {
    font-weight: 500;
}

/* Footer */
.footer {
    background-color: var(--dark-color);
    color: var(--white);
    padding: 60px 0 30px;
    text-align: center;
    position: relative;
    z-index: 10;
}

.footer-text {
    font-family: var(--font-script);
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--primary-color);
}

.footer-subtext {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.8;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--white);
    text-decoration: none;
    transition: var(--transition);
}

.social-icons a:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
}

.copyright {
    font-size: 0.9rem;
    opacity: 0.6;
    margin-top: 30px;
}

/* Responsive Design */
@media (max-width: 992px) {
    .frame {
        max-width: 90%;
        padding: 40px 20px;
    }
    
    .text-xl { font-size: 1.5rem; }
    .text-lg { font-size: 1.2rem; }

    .hero-title {
        font-size: 4rem;
    }
    
    .section-title {
        font-size: 2.5rem;
    }
    
    .story-timeline::before {
        left: 30px;
    }
    
    .story-item {
        flex-direction: row !important;
        justify-content: flex-start;
    }
    
    .story-date {
        flex: 0 0 100px;
        text-align: left;
        padding-right: 20px;
        padding-left: 0;
    }
    
    .story-content {
        flex: 1;
        margin-left: 70px !important;
        margin-right: 0 !important;
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .hero-date {
        font-size: 1.5rem;
    }
    
    .countdown {
        gap: 15px;
    }
    
    .countdown-item {
        min-width: 70px;
        padding: 15px 10px;
    }
    
    .countdown-item span {
        font-size: 2rem;
    }
    
    .section {
        padding: 70px 0;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
    
    .couple-container {
        gap: 40px;
    }
    
    .heart-divider {
        order: -1;
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 576px) {
    .frame {
        max-width: 100%;
        padding: 30px 15px;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .couple-card {
        min-width: 100%;
    }
    
    .couple-image {
        width: 200px;
        height: 200px;
    }
    
    .countdown {
        flex-wrap: wrap;
    }
    
    .countdown-item {
        min-width: calc(50% - 15px);
    }
}
