import { Section } from "lucide-react";
import { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: " C#", level: 80, category: "backend" },
  { name: "SQL", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "C++", level: 65, category: "backend" },
  { name: "ASP.NET MVC", level: 60, category: "backend" },
  { name: " ASP.NET API", level: 60, category: "backend" },
  { name: "LINQ", level: 60, category: "backend" },
  { name: "EF Core", level: 60, category: "backend" },
  { name: "SQL Server", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // More
  { name: "Linux System Administration", level: 90, category: "more" },
  { name: "Networking", level: 70, category: "more" },
  { name: "Bash", level: 85, category: "more" },
  { name: "Software Delivery Lifecycle", level: 95, category: "more" },
  { name: "UAT & System Testing", level: 95, category: "more" },
];
const Categoryies = ["all", "frontend", "backend", "tools", "more"];

export const SkillsSection = () => {
  const [selectedSkills, setSelectedSkills] = useState(skills);

  const generateStars = (category) => {
    if (category === "all") {
      setSelectedSkills(skills);
    } else {
      setSelectedSkills(
        skills.filter((element) => element.category === category),
      );
    }
  };
  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30 skillsBackground "
    >
      <div class="custom-shape-divider-top-1772910980">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary text-glow">Skills</span>
        </h2>

        {Categoryies.map((cat, key) => (
          <button
            key={key}
            onClick={() => generateStars(cat)}
            className="cosmic-button mr-1"
            aria-label={cat + " Skills"}
          >
            {cat.toUpperCase()}
          </button>
        ))}

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3.5 justify-center"
          style={{ justifyItems: "center" }}
        >
          {selectedSkills.map((skill, key) => (
            <div key={key} className="card-wrapper w-fit rounded-2xl">
              <div className="card  rounded-lg shadow-xs relative">
                <img
                  src="/imgs/skillCard1.png"
                  style={{ height: "200px", width: "200px" }}
                  className="relative z-1"
                />

                <div className="w-full absolute top-[30%] flex flex-col justify-center items-center z-2">
                  <div className="mb-4">
                    <h3 className="text-3xl font-semibold">{skill.name}</h3>
                  </div>

                  <div className="mt-3.5">
                    <span className="text-2xl text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="custom-shape-divider-bottom-1773003016">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
            filter="url(#glow)"
          />
        </svg>
      </div>
      <div class="custom-shape-divider-bottom-1773002973">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
            filter="url(#glow2)"
          />
        </svg>
      </div>
    </section>
  );
};
