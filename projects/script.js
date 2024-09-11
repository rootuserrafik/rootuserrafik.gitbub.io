const projects = [
    {
      title: "Seamless Travel Deals Hub",
      description: "I crafted the Premium Booking App website to offer a sleek and efficient solution for online reservations. The project involved developing a custom design that simplifies the booking process and enhances user engagement. By operating HTML, CSS, and JavaScript, I built a responsive, intuitive platform with seamless navigation and interactive features. The result is a high-performing website that not only streamlines the booking experience but also reflects a professional and modern aesthetic, tailored to meet the specific needs of its users.",
      images: [
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_card/v1/attachments/project_item/attachment/0257160a39bac2b82241fb77e9a1cd70-1723199133018/1.gif",
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_card/v1/attachments/project_item/attachment/0257160a39bac2b82241fb77e9a1cd70-1723199146551/1.png"
      ],
      tags: ["React", "Node.js", "API"],
      meta: {
        cost: "$8000",
        duration: "4 months",
        industry: "Healthcare"
      }
    },
    // Add more projects as needed
    {
      title: "Project 2",
      description: "Description for project 2.",
      images: [
        "https://via.placeholder.com/800x400.png?text=Project+2+Image+1",
        "https://via.placeholder.com/800x400.png?text=Project+2+Image+2"
      ],
      tags: ["Tag1", "Tag2"],
      meta: {
        cost: "$6000",
        duration: "3 months",
        industry: "Technology"
      }
    },
    {
      title: "Project 3",
      description: "Description for project 3.",
      images: [
        "https://via.placeholder.com/800x400.png?text=Project+3+Image+1",
        "https://via.placeholder.com/800x400.png?text=Project+3+Image+2"
      ],
      tags: ["Tag3", "Tag4"],
      meta: {
        cost: "$5000",
        duration: "2 months",
        industry: "Finance"
      }
    }
  ];
  
  let currentProjectIndex = 0;
  
  const updateProject = () => {
    const project = projects[currentProjectIndex];
    const projectDetails = document.getElementById("project-details");
    const projectInfo = document.getElementById("project-info");
  
    projectDetails.innerHTML = `
      <h2 id="project-title">${project.title}</h2>
      <p id="project-description"><strong>Project Description:</strong> ${project.description}</p>
      <div class="projects__tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <span class="project__meta">
        <strong>Cost:</strong> ${project.meta.cost} |
        <strong>Duration:</strong> ${project.meta.duration} |
        <strong>Industry:</strong> ${project.meta.industry}
      </span>
      <div class="media-container">
        ${project.images.map(img => `<img class="project-image" src="${img}" alt="${project.title} attachment">`).join('')}
      </div>
    `;
  
    projectInfo.textContent = `Project ${currentProjectIndex + 1} of ${projects.length}`;
  
    document.getElementById("prev-btn").disabled = currentProjectIndex === 0;
    document.getElementById("next-btn").disabled = currentProjectIndex === projects.length - 1;
  };
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentProjectIndex > 0) {
      currentProjectIndex--;
      updateProject();
    }
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentProjectIndex < projects.length - 1) {
      currentProjectIndex++;
      updateProject();
    }
  });
  
  // Initialize with the first project
  updateProject();
  