   
   const projects = [
    {
        name: "E-commerce Platform",
        description: "A full-stack online shopping platform with user authentication",
        technologyUsed: ["React", "Node.js", "MongoDB", "Express"],
        year: 2023
    },
    {
        name: "Weather Dashboard",
        description: "Real-time weather tracking application with location services",
        technologyUsed: ["JavaScript", "OpenWeather API", "HTML5", "CSS3"],
        year: 2023
    },
    {
        name: "Task Management System",
        description: "Collaborative project management tool with real-time updates",
        technologyUsed: ["Vue.js", "Firebase", "Tailwind CSS", "Jest"],
        year: 2024
    }
];

function displayProjects() {
    const container = document.getElementById('projectsContainer');
    
    const projectsHTML = projects.map(project => `
        <div class="project-card">
            <span class="year-badge">${project.year}</span>
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <div>
                ${project.technologyUsed.map(tech => 
                    `<span class="technology-tag">${tech}</span>`
                ).join('')}
            </div>
        </div>
    `).join('');

    container.innerHTML = projectsHTML;
}

window.onload = displayProjects;