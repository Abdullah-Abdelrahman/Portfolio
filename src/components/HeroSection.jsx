import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col min-h-screen items-center justify-center px-4"
    >
      <div className="absolute inset-0 grid grid-cols-1 grid-rows-1 pointer-events-none z-0">
        <div className="col-start-1 row-start-1 w-full h-full relative">
          {/* LAYER 1: Base Rocks - Use object-cover and object-bottom */}
          <img
            src="/imgs/rokcsLayer1.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-bottom  opacity-0 animate-popUp-delay-1 z-4"
          />

          {/* LAYER 2: Bridge - Use object-cover and object-bottom */}
          <img
            src="/imgs/bridge.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-bottom opacity-0 animate-popUp-delay-2 z-3"
          />

          {/* LAYER 3: Foreground Rocks */}
          <img
            src="/imgs/rocksLayer3.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-bottom  opacity-0 animate-move-diagonal-135-delay-3 z-2"
          />

          {/* THE SUN: Positioned relative to the bottom so it stays in the scene */}
          <div className="absolute bottom-[20%] left-[30%] h-[60%] aspect-square bg-white rounded-full shadow-[0_0_100px_50px_rgba(255,255,255,0.85)] z-0 opacity-0 animate-sunRise"></div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1772903744  --animate-fade-in-delay-1 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Abdullah
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
            </span>
          </h1>

          <p className="text-lg md:text-2xl max-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a software developer who enjoys exploring different areas of
            technology. I know a little about many fields, but I specialize in
            backend development, game development, and telecommunications
            systems.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button ">
              View my Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span>Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
