const projects = [
  {
      title: "Web Development Portfolio",
      description: "A responsive and dynamic portfolio website created for showcasing a developer's skills. Built using HTML, CSS, and JavaScript with integration of animations and a contact form.",
      images: [
          "https://via.placeholder.com/800x400.png?text=Web+Development+1",
          "https://via.placeholder.com/800x400.png?text=Web+Development+2"
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      meta: {
          cost: "$5000",
          duration: "2 months",
          industry: "Technology"
      }
  },
  {
      title: "Mobile App for Task Management",
      description: "A mobile application that helps users manage their tasks effectively with reminders and notifications. Developed using React Native and Firebase.",
      images: [
          "https://via.placeholder.com/800x400.png?text=Mobile+App+1",
          "https://via.placeholder.com/800x400.png?text=Mobile+App+2"
      ],
      tags: ["React Native", "Firebase"],
      meta: {
          cost: "$10000",
          duration: "4 months",
          industry: "Productivity"
      }
  },
  {
      title: "Cloud Data Storage Solution",
      description: "A scalable cloud storage solution for enterprises to manage their data securely. Built using AWS S3, Lambda, and DynamoDB.",
      images: [
          "https://via.placeholder.com/800x400.png?text=Cloud+Solution+1",
          "https://via.placeholder.com/800x400.png?text=Cloud+Solution+2"
      ],
      tags: ["AWS S3", "Lambda", "DynamoDB"],
      meta: {
          cost: "$15000",
          duration: "6 months",
          industry: "IT Infrastructure"
      }
  },
  {
      title: "SEO Optimization for E-commerce",
      description: "An SEO and digital marketing project aimed at increasing the visibility of an e-commerce site on search engines. Results included a 30% increase in organic traffic.",
      images: [
          "https://via.placeholder.com/800x400.png?text=SEO+Marketing+1",
          "https://via.placeholder.com/800x400.png?text=SEO+Marketing+2"
      ],
      tags: ["SEO", "Google Analytics", "Content Strategy"],
      meta: {
          cost: "$4000",
          duration: "3 months",
          industry: "E-commerce"
      }
  },
  {
      title: "E-Commerce Platform",
      description: "An end-to-end e-commerce platform with product listings, a shopping cart, and payment gateway integration. Built using Shopify and custom APIs.",
      images: [
          "https://via.placeholder.com/800x400.png?text=E-Commerce+1",
          "https://via.placeholder.com/800x400.png?text=E-Commerce+2"
      ],
      tags: ["Shopify", "Custom API", "Stripe Integration"],
      meta: {
          cost: "$12000",
          duration: "5 months",
          industry: "Retail"
      }
  },
  {
      title: "Digital Transformation for Healthcare",
      description: "A digital transformation project for a healthcare provider, focusing on automating patient onboarding, scheduling, and record management. Built with custom software solutions.",
      images: [
          "https://via.placeholder.com/800x400.png?text=Digital+Transformation+1",
          "https://via.placeholder.com/800x400.png?text=Digital+Transformation+2"
      ],
      tags: ["Automation", "Healthcare Software", "Digital Workflow"],
      meta: {
          cost: "$30000",
          duration: "8 months",
          industry: "Healthcare"
      }
  },
  {
      title: "Custom Problem Solving for Logistics",
      description: "A custom software solution designed to optimize the logistics and supply chain for a transportation company. Included route optimization and inventory management.",
      images: [
          "https://via.placeholder.com/800x400.png?text=Custom+Problem+Solving+1",
          "https://via.placeholder.com/800x400.png?text=Custom+Problem+Solving+2"
      ],
      tags: ["Logistics", "Route Optimization", "Inventory Management"],
      meta: {
          cost: "$18000",
          duration: "6 months",
          industry: "Logistics"
      }
  },
  {
      title: "Social Media Mobile App",
      description: "A mobile application for connecting users through a new social media platform. Developed using Flutter and Firebase with real-time chat functionality.",
      images: [
          "https://via.placeholder.com/800x400.png?text=Mobile+App+Social+Media+1",
          "https://via.placeholder.com/800x400.png?text=Mobile+App+Social+Media+2"
      ],
      tags: ["Flutter", "Firebase", "Real-time Chat"],
      meta: {
          cost: "$12000",
          duration: "5 months",
          industry: "Social Media"
      }
  },
  {
      title: "Cloud-based CRM Solution",
      description: "A custom CRM solution hosted on the cloud, allowing for scalable customer management for sales teams. Built using Google Cloud and Angular.",
      images: [
          "https://via.placeholder.com/800x400.png?text=Cloud+CRM+1",
          "https://via.placeholder.com/800x400.png?text=Cloud+CRM+2"
      ],
      tags: ["Google Cloud", "Angular", "CRM"],
      meta: {
          cost: "$20000",
          duration: "6 months",
          industry: "Sales"
      }
  },
  {
      title: "Digital Marketing Campaign for Startups",
      description: "A complete digital marketing campaign for startups to boost their online presence, including social media management, SEO, and paid ads strategy.",
      images: [
          "https://via.placeholder.com/800x400.png?text=Marketing+Campaign+1",
          "https://via.placeholder.com/800x400.png?text=Marketing+Campaign+2"
      ],
      tags: ["Digital Marketing", "Paid Ads", "Social Media Management"],
      meta: {
          cost: "$5000",
          duration: "2 months",
          industry: "Startups"
      }
  }
];

let currentProjectIndex = 0;

const updateProject = () => {
  const project = projects[currentProjectIndex];
  const projectDetails = document.getElementById("project-details");
  const projectInfo = document.getElementById("project-info");

  if (projectDetails) {
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
  }

  if (projectInfo) {
      projectInfo.textContent = `Project ${currentProjectIndex + 1} of ${projects.length}`;
  }

  document.getElementById("prev-btn").disabled = currentProjectIndex === 0;
  document.getElementById("next-btn").disabled = currentProjectIndex === projects.length - 1;
};

// Load the header.html dynamically
fetch('header.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('project-header-container').innerHTML = data;

      // Attach event listeners to the buttons after they are loaded into the DOM
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");

      prevBtn.addEventListener("click", () => {
          if (currentProjectIndex > 0) {
              currentProjectIndex--;
              updateProject();
          }
      });

      nextBtn.addEventListener("click", () => {
          if (currentProjectIndex < projects.length - 1) {
              currentProjectIndex++;
              updateProject();
          }
      });

      // Initialize with the first project
      updateProject();
  })
  .catch(error => console.error('Error loading header:', error));
