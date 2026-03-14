import {
  ArrowRightCircle,
  Clock,
  Facebook,
  LocationEdit,
  Phone,
  X,
  Youtube,
} from "lucide-react";

export const FooterSection = () => {
  return (
    <section class="footer bg-primary">
      <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
        <div class="grid grid-cols-1 gap-4 justify-center items-center">
          <p className="font-extrabold text-5xl">Abdullah</p>
          <ul className="flex flex-row justify-center items-center gap-3">
            <li className="bg-foreground/20 rounded-sm transition-colors duration-100 hover:bg-primary p-1">
              <a href="#">
                <Facebook size={40} />
              </a>
            </li>
            <li className="bg-foreground/20 rounded-sm transition-colors duration-100 hover:bg-primary p-1">
              <a href="">
                <Youtube size={40} />
              </a>
            </li>
            <li className="bg-foreground/20 rounded-sm transition-colors duration-100 hover:bg-primary p-1">
              <a href="">
                <X size={40} />
              </a>
            </li>
          </ul>

          <p>
            I like building reliable systems, understanding how things work
            behind the scenes, and turning ideas into real applications.
          </p>
        </div>
        <ul class="flex flex-col gap-3 justify-center">
          <li className="FooterLink">
            <a
              className="flex flex-row justify-center items-center gap-3"
              target="_blank"
              href="https://www.linkedin.com/in/abdullah-abdelrahman1aa25zz/"
            >
              <ArrowRightCircle className="arrow" size={30} />
              <span>Vist Me On Linkedin</span>
            </a>
          </li>
          <li className="FooterLink">
            <a
              className="flex flex-row justify-center items-center gap-3"
              href="https://wa.me/+201011834590"
            >
              <ArrowRightCircle className="arrow" size={30} />
              <span>Contact On whatsapp</span>
            </a>
          </li>

          <li className="FooterLink">
            <a
              className="flex flex-row justify-center items-center gap-3"
              href="https://github.com/Abdullah-Abdelrahman?tab=repositories"
            >
              <ArrowRightCircle className="arrow" size={30} />
              <span>Vist My GitHub</span>
            </a>
          </li>
        </ul>

        <ul class="flex flex-col gap-3 justify-center items-center">
          <li className="flex flex-row justify-center items-center gap-3">
            <LocationEdit size={30} />
            <p>Egypt, Cairo</p>
          </li>
          <li className="flex flex-row justify-center items-center gap-3">
            <Clock size={30} />
            <p>Business Hours: From 09:00 AM To 20:00 PM</p>
          </li>
          <li className="flex flex-row justify-center items-center gap-3">
            <Phone size={30} />
            <div class="numbers">
              <p>+201011834590</p>
            </div>
          </li>
        </ul>
      </div>

      <span></span>

      <p>Made by Abdullah</p>
    </section>
  );
};
