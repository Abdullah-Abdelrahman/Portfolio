import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    console.log(newStars);

    setStars(newStars);
  };
  const generateMeteors = () => {
    const numberOfMetors = Math.random() * 5 + 3;

    const newMetors = [];
    for (let i = 0; i < numberOfMetors; i++) {
      newMetors.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 10,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMetors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
      {stars.map((star) => (
        <div
          key={star.id}
          className="animate-pulse-subtle star"
          style={{
            height: star.size + "px",
            width: star.size + "px",
            opacity: star.opacity,
            left: star.x + "%",
            top: star.y + "%",
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            height: meteor.size * 0.5 + "px",
            width: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDuration: meteor.animationDuration + "s",
            animationDelay: meteor.delay,
          }}
        />
      ))}
    </div>
  );
};
