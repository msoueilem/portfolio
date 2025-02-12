const resumeData = {
    "name": "Mohamed Soueilem",
    "title": "Software Engineer (JavaScript / TypeScript)",
    "contact": {
        "phone": "641-819-1600",
        "email": "mlsoueilem@gmail.com",
        "linkedin": "https://www.linkedin.com/in/soueilem/",
        "location": "Atlanta Metropolian Area, GA 30338"
    },
    "skills": {
        "languages": ["Dart", "Java", "C++, C"],
        "web": ["HTML5", "CSS3", "JavaScript", "XML", "Angular JS", "NodeJS", "Vue JS"],
        "webServices": ["REST-API"],
        "webServers": ["AWS (Amazon Web Services)"],
        "frameworks": ["Express", "Flutter", "Angular", "Node", "Hibernate (JPA)"],
        "databases": ["Mongo DB", "Redis", "MySQL"],
        "designPatterns": ["Singleton", "Prototype", "Observer", "Session", "Session Factory", "Factory", "Abstract Factory", "Proxy", "Decorator", "Façade", "State", "Strategy", "Template Method", "Visitor", "Iterator", "Adapter", "Command", "Composite"],
        "sdlc": ["Agile", "Waterfall"],
        "tools": ["VS Code", "IntelliJ", "Sublime Text", "UML", "Docker", "Postman", "GitHub", "Zoom", "Eclipse"],
        "platforms": ["MacOS", "Windows", "Linux"]
    },
    "summary": "IT professional and leader with 4+ years of experience collaborating with teams in development, design, code, testing, deploying, and optimization of diverse technical solutions using JavaScript and Dart technologies. Skilled analyst and troubleshooter dedicated to quality deliverables and user experiences. Implemented back-end and front-end development functions using Angular, Node, React, Restful, Flutter and MongoDB. Implemented several applications on schedule across the software development life cycle using Agile methodologies.",
    "experience": [
        {
            "company": "WebMD",
            "location": "Atlanta, GA",
            "title": "Web Application Developer",
            "period": "October 2022 - present",
            "description": "As a WebMD web application developer my primary responsibility is to create and maintain front-end web applications. These applications are not only user-friendly but also align with accessibility standards. Effective communication across diverse teams is a crucial part of my job.",
            "technologies": ["VueJS", "TypeScript", "Git", "Workfront", "GitLab", "HTML5", "CSS3", "SASS", "Visual Studio"], // Added relevant technologies
            "responsibilities": [
                "Developing and supporting accessible, W3C standards compliant HTML, CSS, and JavaScript for front-end deployment across all supported browsers and devices while meeting strict QA guidelines.",
                "Writing user-side logic with JavaScript, developing user-facing web applications and components using Vanilla JS and JavaScript frameworks like Vue3.",
                "Collaborating effectively with delivery teams; Developers, designers, project managers, content publishers.",
                "Working in a team environment and being able to pick up existing code and efficiently adapt to make updates across different coding languages."
            ]
        },
        {
            "company": "MAURIBAC BY MAURIBIT",
            "location": "Nouakchott, Mauritania",
            "title": "Software Developer",
            "period": "2018-2022",
            "description": "Website for publication of exam results.",
            "technologies": ["VueJS", "TypeScript", "AWS", "Angular", "React", "Git", "Bitbucket", "Redis", "Google Analytics", "Visual Studio"],
            "responsibilities": [
                "Promoted from software development role to spearhead IT operations.",
                "Played key role in web application development based on VueJS framework.",
                "Contributed to implementation of new UX version of Mauribac built with Vue.js, Vuex, and other Vue-related technologies.",
                "Worked on front-end, dynamic, and interactive development from scratch.",
                "Provided back-end management with Typescript as server-side language running in node.js environment with Redis as in-memory cache service and AWS (Amazon Web Services, Inc.) to deploy.",
                "Delivered codebase working with Git and Bitbucket.",
                "Tracked and analyzed usage with Google Analytics review.",
                "Tested newly deployed features.",
                "Administered Mauribac Facebook page, responding to inquiries and offering tech support.",
                "Upgraded the existing system to Angular and subsequently used React to make the UI latest."
            ]
        },
        {
            "company": "Lebjawi Tech",
            "location": "Online",
            "title": "Flutter Developer",
            "period": "2019-2023",
            "description": "Self-practice, and work in my private company. I started my journey with flutter, from 2019 before the null safety, and from time I was leaning how to code apps that I can use make my life easier, and from then I joined a group of developers, and we started our company Lebjawi Tech, and we started coding Mobile apps for company, and that company still exists today in my home country, I was part of a group that create an app similar to uber for one of our big client, and here is the best thing I enjoyed about it:",
            "technologies": ["Typescript", "Firebase", "React", "Git", "Visual Studio", "JavaScript"],
            "responsibilities": [
                "The localization package to translate all the text in the app, with as many languages as you want.",
                "Using the google map api, to help the user interact with it smoothly.",
                "Push notification to alert the user.",
                "Using secure storage to store any global data that you want to use around the app.",
                "Communicating with firebase backend with fire store and database instances.",
                "Communicating with the Api using the fetch inspector to get or post.",
                "Using dart null safety to ensure that the code makes it through."
            ]
        }
    ],
    "education": [
        {
            "degree": "Master of Science in Computer Science",
            "university": "Maharishi International University",
            "location": "Fairfield, Iowa",
            "graduation": "Graduated",
            "keyCourses": ["Fundamental Programming Practices", "Modern Programming Practices", "Web Application Programming", "Modern Web Applications", "Algorithm", "Advanced Software Development"]
        },
        {
            "degree": "Bachelor of Science in Computer Science",
            "university": "University of Nouakchott Al-Asriya",
            "location": "Nouakchott, Mauritania",
            "graduation": "Graduated",
            "keyCourses": ["Software Engineering", "Database", "Networking", "Web Development", "Mobile Development"]
        }
    ],
    "projects": [
        {
            "name": "Mean Games",
            "university": "Maharishi International University",
            "year": 2022,
            "description": "Created scalable single web application, that meant to have track of all your mean games that you use, so you can add any game, and keep track of your progress with it, and you can manage all your games after the authentication, Utilized MEAN stack, Mongo DB, Express, Node.js, Angular, and Postman.",
            "technologies": ["MEAN stack", "Mongo DB", "Express", "Node.js", "Angular", "Postman"]
        },
        {
            "name": "Mobile Tracking App",
            "university": "University of Nouakchott Al-Asriya",
            "year": 2019,
            "description": "Developed mobile application used to track car with GPS device, gathering and storing information on website written in Laravel and based on PHP.",
            "technologies": ["Java", "Android Studio", "Laravel"]
        }
    ],
    "note": "I am eager to contribute my skills and experience to a challenging and rewarding role in software development. I am confident that I can be a valuable asset to your team. Please feel free to contact me to discuss my qualifications further.",
    "resumePath": "assets/public/ATS.docx"
};


function populateResume() {
    // Header
    const headerContent = document.querySelector('header');
    const headerName = document.createElement('h1');
    headerName.textContent = resumeData.name;
    const headerTitle = document.createElement('h2');
    headerTitle.textContent = resumeData.title;
    headerContent.appendChild(headerName);
    headerContent.appendChild(headerTitle);

    // Contact Information
    const contactContent = document.getElementById('contact-info');
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Information';
    contactContent.appendChild(contactHeader);

    const contactPhone = document.createElement('p');
    contactPhone.innerHTML = `<b>Phone:</b> ${resumeData.contact.phone}`;
    contactContent.appendChild(contactPhone);

    const contactEmail = document.createElement('p');
    contactEmail.innerHTML = `<b>Email:</b> ${resumeData.contact.email}`;
    contactContent.appendChild(contactEmail);

    const contactLinkedin = document.createElement('p');
    contactLinkedin.innerHTML = `<b>LinkedIn:</b> <a href="${resumeData.contact.linkedin}" target="_blank">${resumeData.contact.linkedin}</a>`;
    contactContent.appendChild(contactLinkedin);

    const contactLocation = document.createElement('p');
    contactLocation.innerHTML = `<b>Location:</b> ${resumeData.contact.location}`;
    contactContent.appendChild(contactLocation);

    // Skills
    const skillsContent = document.getElementById('skills');
    const skillsHeader = document.createElement('h2');
    skillsHeader.textContent = 'Skills';
    skillsContent.appendChild(skillsHeader);

    const skillsList = document.createElement('ul');
    for (const skillType in resumeData.skills) {
        const skillItem = document.createElement('li');
        skillItem.innerHTML = `<b>${skillType}:</b> ${resumeData.skills[skillType].join(', ')}`;
        skillsList.appendChild(skillItem);
    }
    skillsContent.appendChild(skillsList);


    // About
    const aboutContent = document.getElementById('about');
    const aboutSummary = document.createElement('p');
    aboutSummary.textContent = resumeData.summary;
    aboutContent.appendChild(aboutSummary);

    // Experience
    const experienceContent = document.getElementById('experiences');
    const experienceHeader = document.createElement('h2');
    experienceHeader.textContent = 'Professional Experience';
    experienceContent.appendChild(experienceHeader);

    resumeData.experience.forEach(exp => {
        const experienceArticle = document.createElement('article');
        experienceArticle.classList.add('experience');

        const experienceTitle = document.createElement('h3');
        experienceTitle.textContent = exp.title;
        experienceArticle.appendChild(experienceTitle);

        const experienceCompany = document.createElement('h4');
        experienceCompany.textContent = `${exp.company}, ${exp.location} (${exp.period})`;
        experienceArticle.appendChild(experienceCompany);

        const experienceDescription = document.createElement('p');
        experienceDescription.textContent = exp.description;
        experienceArticle.appendChild(experienceDescription);

        const experienceResponsibilities = document.createElement('ul');
        exp.responsibilities.forEach(resp => {
            const responsibilityItem = document.createElement('li');
            responsibilityItem.textContent = resp;
            experienceResponsibilities.appendChild(responsibilityItem);
        });
        experienceArticle.appendChild(experienceResponsibilities);

        const experienceTechnologies = document.createElement('p');
        experienceTechnologies.innerHTML = `<b>Technologies Used:</b> ${exp.technologies.join(', ')}`;
        experienceArticle.appendChild(experienceTechnologies);

        experienceContent.appendChild(experienceArticle);
    });

    // Education
    const educationContent = document.getElementById('education');
    const educationHeader = document.createElement('h2');
    educationHeader.textContent = 'Education';
    educationContent.appendChild(educationHeader);

    resumeData.education.forEach(edu => {
        const educationArticle = document.createElement('article');
        educationArticle.classList.add('education');

        const educationDegree = document.createElement('h3');
        educationDegree.textContent = edu.degree;
        educationArticle.appendChild(educationDegree);

        if (edu.graduation) {
            const educationGraduation = document.createElement('p');
            educationGraduation.textContent = edu.graduation;
            educationArticle.appendChild(educationGraduation);
        }

        const educationUniversity = document.createElement('p');
        educationUniversity.textContent = `${edu.university}, ${edu.location}`;
        educationArticle.appendChild(educationUniversity);

        if (edu.keyCourses.length > 0) {
            const educationKeyCourses = document.createElement('p');
            educationKeyCourses.innerHTML = `<b>Key Courses:</b> ${edu.keyCourses.join(', ')}`;
            educationArticle.appendChild(educationKeyCourses);
        }

        educationContent.appendChild(educationArticle);
    });

    // Projects
    const projectsContent = document.getElementById('projects');
    const projectsHeader = document.createElement('h2');
    projectsHeader.textContent = 'Projects';
    projectsContent.appendChild(projectsHeader);

    resumeData.projects.forEach(project => {
        const projectArticle = document.createElement('article');
        projectArticle.classList.add('project');

        const projectName = document.createElement('h3');
        projectName.textContent = project.name;
        projectArticle.appendChild(projectName);

        const projectUniversity = document.createElement('h4');
        projectUniversity.textContent = `${project.university}, ${project.year}`;
        projectArticle.appendChild(projectUniversity);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectArticle.appendChild(projectDescription);

        const projectTechnologies = document.createElement('p');
        projectTechnologies.innerHTML = `<b>Technologies Used:</b> ${project.technologies.join(', ')}`;
        projectArticle.appendChild(projectTechnologies);

        projectsContent.appendChild(projectArticle);
    });

    // Footer
    const footerContent = document.querySelector('footer');
    const footerParagraph = document.createElement('p');
    footerParagraph.textContent = resumeData.note;
    const downloadResume = document.createElement('a');
    downloadResume.id = "download-resume";
    downloadResume.href = resumeData.resumePath;
    downloadResume.target = "_blank";
    downloadResume.download = "Mohamed Soueilem - Resume.docx";
    const downloadResumeIcon = document.createElement('img');
    downloadResumeIcon.src = "assets/images/icon.png";
    downloadResumeIcon.alt = "Download Resume";
    downloadResume.appendChild(downloadResumeIcon);
    footerContent.appendChild(downloadResume);
    footerContent.appendChild(footerParagraph);
}

populateResume();