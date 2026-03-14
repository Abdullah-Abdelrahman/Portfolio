import { Briefcase, Code, User } from "lucide-react";

export const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative"
      style={{ backgroundColor: "#230206" }}
    >
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary text-glow">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p>
              I’m a software developer who enjoys exploring different areas of
              technology. I know a little about many fields, but I specialize in
              backend development, game development, and telecommunications
              systems.
            </p>
            <p>
              I like building reliable systems, understanding how things work
              behind the scenes, and turning ideas into real applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/pdfs/Abdullah_Abdelrahman_Software_Engineer_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover bg-primary/25">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="">
                    Building scalable APIs and server-side systems with a focus
                    on performance, security, and clean architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover bg-primary/25">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="">
                    Experience in game design that helps me create better user
                    experiences and visual interactions in frontend development.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-primary/25">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Telecommunications</h4>
                  <p className="">
                    Working with telecom platforms and communication systems to
                    build and integrate reliable voice and service solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
