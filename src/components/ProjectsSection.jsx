import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/imgs/project1.png",
    tags: ["ASP.NET", "MVC", "HTML", "CSS", "JS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Abdullah-Abdelrahman/Ecommerce",
  },
  {
    id: 1,
    title: "fitness Coaching Management system",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/imgs/project2.png",
    tags: ["Asp. Net Core", "3-tier architecture", "External Login", "Stripe "],
    demoUrl: "#",
    githubUrl: "https://github.com/Abdullah-Abdelrahman/OnlineGym",
  },
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/imgs/project4.png",
    tags: [".NET 8", "Clean Architecture", "CQRS", " multi-tenancy"],
    demoUrl: "#",
    githubUrl: "https://github.com/Abdullah-Abdelrahman/Erp.Back",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative  z-20"
      style={{ backgroundColor: "#230206" }}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card/10  overflow shadow-xs card-hover relative rounded-4xl"
            >
              <img
                src="/imgs/project_card_border.png"
                className="absolute inset-0 w-full h-full scale-112 pointer-events-none z-10 project-card-border"
                alt=""
              />

              <div className=" p-3.5 h-35 overflow-hidden rounded-4xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-4xl w-full  object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/25  text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center rounded-4xl">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
