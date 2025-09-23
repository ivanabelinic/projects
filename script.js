const projects = [
    {
        id: "adoptly",
        title: "Adoptly",
        description: "Adoptly is a comprehensive Android application developed as a diploma thesis project, designed to modernize and simplify the pet adoption process. The app provides an intuitive and transparent platform connecting shelters and potential adopters, digitalizing every step from browsing pet profiles to finalizing adoption agreements. With a strong focus on user experience, security, and reliability, Adoptly offers advanced functionalities including real-time communication, status tracking, and document signing within a single cohesive system.",
        features: [
            "User registration and authentication with password reset capabilities.",
            "Advanced pet and shelter browsing with detailed profiles and filtering options.",
            "Complete digital adoption workflow including application management, video calls for home condition verification, and contract signing.",
            "Real-time notifications and messaging system facilitating communication between adopters and shelters.",
            "Management tools for shelters to add, edit, and track the status of pets and adoption requests.",
            "Guest mode allowing non-registered users to explore selected features.",
            "Integration of Google Maps and Places API for location services.",
            "Support for multimedia communication using Agora SDK.",
            "Secure data storage and backend powered by Firebase services including Firestore, Authentication, Storage, and Cloud Functions."
        ],
        logo: "adoptly.PNG",
        screenshots: [
            "adopter-home.png",
            "shelter-home.png",
            "requests.png",
            "profile.png",
            "notifications.png"
        ],
        notes: [
            "Adopter — Email: ivana@gmail.com, Password: Belinic01",
            "Shelter — Email: zelenadolina@gmail.com, Password: Zelenadolina1",
            "Registration is open: new users can create accounts."
        ],
        apkUrl: "adoptly_app_debug.apk",
        technologies: ["Kotlin", "Android Studio", "Firebase", "Agora SDK", "Google Maps API", "Google Places API", "MVVM Architecture", "Hilt Dependency Injection"],
        category: "Pet Adoption"
    },
    {
        id: 'cultureclick',
        title: 'CultureClick',
        description: `CultureClick is a personalized cultural guide app that recommends cultural and entertainment events based on user interests and location. 
The app allows users to browse, filter, and view detailed information about events, save favorites, and manage their user profile. Although ticket purchasing 
is visually represented, it is currently not enabled. Developed to unify scattered event data into a simple, user-friendly platform, CultureClick aims to 
make local cultural and social experiences easily accessible to users of all ages.`,
        logo: 'cultureclick.png',
        screenshots: [
            'culture.jpg',
            'culture1.jpg',
            'culture2.jpg',
            'culture3.jpg',
            'culture4.jpg',
            'culture5.jpg',
            'culture6.jpg',
            'culture7.jpg',
            'culture8.jpg',
        ],
        features: [
            "Personalized event recommendations based on user-selected interests and location.",
            "User registration, login, and profile management.",
            "Browse and filter cultural and social events including museums, galleries, and shows.",
            "Save favorite events for quick access.",
            "View detailed event descriptions and related information.",
            "Visual representation of ticket purchasing (not yet functional)."
        ],
        notes: [
            "Test user credentials available for app login",
            "Username: pixode, Password: pixode"
        ],
        apkUrl: 'culture_click_app_debug.apk',
        technologies: [
            "Kotlin",
            "Android Studio",
            "Firebase Cloud Firestore",
            "Firebase Cloud Storage",
            "Google Maps SDK",
            "ML Kit SDK",
            "SharedPreferences",
            "MVVM Architecture"
        ],
        category: 'Culture & Entertainment'
    },
    {
        id: 'sofascore-mini',
        title: 'Sofascore Mini',
        description: `The Sofascore Mini app is the final project of the Sofascore Android Academy, offering a streamlined yet fully functional version of the Sofascore app. 
This application demonstrates modern Android development with Kotlin, clean scalable architecture (MVVM/MVI), efficient networking with Retrofit, 
and responsive UI design via Jetpack Compose or View framework. Features include live match lists, league details, event and team statistics, 
player profiles, tournament tracking, and customizable settings, embodying best practices and robust implementation.`,
        features: [
            "Main List Page displaying live matches, teams, and real-time scores with event grouping and navigation.",
            "Leagues Page presenting supported sports leagues with logos and access to tournament details.",
            "Event Details Page showing match status, incidents, and in-depth statistics with navigation to related entities.",
            "Team Details Page providing comprehensive team info, match history, squad listing, and tournament participation.",
            "Tournament Details Page with matches, standings, and navigation between events and teams.",
            "Player Details Page with player biography, statistics, and match history.",
            "Settings Page enabling theme change, preferences, and about section.",
        ],
        logo: "sofascoremini.png",
        screenshots: [
            "sofa1.jpg",
            "sofa2.jpg",
            "sofa3.jpg",
            "sofa4.jpg",
            "sofa5.jpg",
            "sofa6.jpg",
            "sofa7.jpg"
        ],
        notes: [
            "Final project combining theory and practice from Sofascore Android Academy.",
            "Built with Kotlin, MVVM/MVI architectures, Retrofit, Coroutines, Paging, and Git versioning.",
        ],
        apkUrl: 'sofascoremini.apk',
        technologies: [
            "Kotlin",
            "MVVM/MVI Architecture",
            "Retrofit",
            "Kotlin Coroutines",
            "LiveData & Flow",
            "Paging",
            "Jetpack Compose / View Framework",
            "Git"
        ],
        category: "Sports"
    },
    {
        id: 'ttpay',
        title: 'TTPay',
        description: `TTPay is a secure digital wallet and payment solution developed as a team project at FOI. 
It offers functionalities for merchants and administrators to manage products, initiate and track payment transactions, 
and handle payment methods including card and cash. The app integrates a backend with real-time transaction processing and bank host simulation, 
ensuring reliable e-payment transaction flows. Advanced login methods including username/password and fingerprint are supported, 
providing a secure and user-friendly payment ecosystem.`,
        features: [
            "Merchant product catalog management with the ability to add and remove products.",
            "Transaction initiation, cancellation, and detailed transaction history viewing.",
            "Support for card and cash payments with secure customer and card data handling.",
            "Admin-only management capabilities for adding merchants and products.",
            "Real-time backend processing and communication with bank host simulator.",
            "Advanced login features: username/password, fingerprint authentication, and optional PIN.",
            "Modular architecture separating frontend and backend concerns for scalability."
        ],
        logo: 'ttpay.png',
        screenshots: [
            'ttpay1.png',
            'ttpay2.png',
            'ttpay3.png',
            'ttpay4.png',
            'ttpay5.png',
            'ttpay6.png',
            'ttpay7.png',
            'ttpay8.png',
            'ttpay9.png',
            'ttpay10.png',
            'ttpay11.png'
        ],
        notes: [
            "Login credentials for testing",
            "Admin: username: kkatic, password: password",
            "Merchant: username: ffilipovic, password: password"
        ],
        apkUrl: 'ttpay_app_debug.apk',
        technologies: [
            "Kotlin",
            "Java (Spring Boot)",
            "GoLang",
            "MongoDB",
            "Docker",
            "Android Studio",
            "Jira",
            "Confluence"
        ],
        category: 'Finance'
    }
];

let currentProject = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
    renderTechnologies();

    // Close modal when clicking outside
    document.getElementById('modalOverlay').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Render projects grid
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openModal('${project.id}')">
            <div class="project-image">
                <img src="${project.logo}" alt="${project.title} logo" loading="lazy">
                <div class="project-overlay">
                    <div class="project-actions">
                        <button class="btn btn-secondary btn-small">
                            <i class="fas fa-eye"></i>
                            View Details
                        </button>
                        <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); downloadApp('${project.id}')">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-category">
                        <i class="fas fa-mobile-alt"></i>
                        ${project.category}
                    </div>
                </div>
                
                <p class="project-description">${project.description}</p>
                
                <div class="project-technologies">
                    ${project.technologies.slice(0, 3).map(tech =>
        `<span class="tech-badge">${tech}</span>`
    ).join('')}
                    ${project.technologies.length > 3 ?
            `<span class="tech-badge">+${project.technologies.length - 3} more</span>` :
            ''
        }
                </div>
                
                <div class="project-meta">
                    ${project.features.length} features • Download available
                </div>
            </div>
        </div>
    `).join('');
}

// Render technologies
function renderTechnologies() {
    const technologiesGrid = document.getElementById('technologiesGrid');
    const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

    technologiesGrid.innerHTML = allTechnologies.map(tech =>
        `<span class="technology-badge">${tech}</span>`
    ).join('');
}

let currentScreenshotIndex = 0;

// Otvori modal
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    currentProject = project;
    currentScreenshotIndex = 0; // reset index

    // Logo
    document.getElementById('modalLogo').src = project.logo || (project.screenshots ? project.screenshots[0] : project.screenshot);
    document.getElementById('modalLogo').alt = `${project.title} logo`;

    // Prikaži prvu screenshot sliku
    const screenshotImg = document.querySelector('#modalScreenshot img');
    const screenshots = project.screenshots || [project.screenshot];
    screenshotImg.src = screenshots[currentScreenshotIndex];
    screenshotImg.alt = `${project.title} screenshot`;

    // Popuni ostatak modala (title, description, notes, features, technologies)
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    const modalNotes = document.getElementById('modalNotes');
    modalNotes.innerHTML = '';
    if (Array.isArray(project.notes)) {
        project.notes.forEach(note => {
            const li = document.createElement('li');
            li.textContent = note;
            modalNotes.appendChild(li);
        });
    } else if (typeof project.notes === 'string') {
        project.notes.split(/\r?\n|;\s*/).forEach(note => {
            if (note.trim()) {
                const li = document.createElement('li');
                li.textContent = note.trim();
                modalNotes.appendChild(li);
            }
        });
    }

    const modalTechnologies = document.getElementById('modalTechnologies');
    modalTechnologies.innerHTML = project.technologies.map(tech =>
        `<span class="tech-badge">${tech}</span>`
    ).join('');

    const modalFeatures = document.getElementById('modalFeatures');
    modalFeatures.innerHTML = project.features.map(feature =>
        `<li>${feature}</li>`
    ).join('');

    // Show modal
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Carousel navigation
function prevScreenshot() {
    if (!currentProject) return;
    const screenshots = currentProject.screenshots || [currentProject.screenshot];
    currentScreenshotIndex = (currentScreenshotIndex - 1 + screenshots.length) % screenshots.length;
    document.querySelector('#modalScreenshot img').src = screenshots[currentScreenshotIndex];
}

function nextScreenshot() {
    if (!currentProject) return;
    const screenshots = currentProject.screenshots || [currentProject.screenshot];
    currentScreenshotIndex = (currentScreenshotIndex + 1) % screenshots.length;
    document.querySelector('#modalScreenshot img').src = screenshots[currentScreenshotIndex];
}

// Close modal
function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentProject = null;
}

// Download app
function downloadApp(projectId = null) {
    const project = projectId ? projects.find(p => p.id === projectId) : currentProject;
    if (!project || !project.apkUrl || project.apkUrl === '#') return;

    // Prikaz poruke
    alert(`Preuzimanje u tijeku: ${project.title}`);

    // Stvarno preuzimanje APK datoteke
    const link = document.createElement('a');
    link.href = project.apkUrl;
    link.download = ''; // prazno znači da browser koristi originalno ime datoteke
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[loading="lazy"]');

    images.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });

        img.addEventListener('error', function () {
            this.style.opacity = '0.5';
            this.alt = 'Image failed to load';
            console.error(`Failed to load image: ${this.src}`);
        });
    });
});