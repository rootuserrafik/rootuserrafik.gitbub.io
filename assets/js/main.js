// main.js
document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');

    // Fetch data from the JSON file
    fetch('assets/data/projects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                // Create a new card for each project
                const card = document.createElement('div');
                card.classList.add('card', 'glass-effect');

                card.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" class="card__image">
                    <div class="card__content">
                        <h3 class="card__title">${project.title}</h3>
                        <p class="card__description">${project.description}</p>
                        <a href="${project.link}" class="button button--secondary">View Details</a>
                    </div>
                `;

                // Append the card to the container
                projectsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching project data:', error);
        });
});
