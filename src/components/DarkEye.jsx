import React, { useState, useEffect } from "react";

function DarkEye({ isActive }) {
  const [beam, setBeam] = useState({ x: 0, y: 0 });
  const [beamActive, setBeamActive] = useState(false);
  const [persistent, setPersistent] = useState(false);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

  const eyeX = window.innerWidth / 2;
  const eyeY = 32;

  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e) => {
      const dx = e.clientX - eyeX;
      const dy = e.clientY - eyeY;
      const maxOffset = 5;
      const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 100);
      const ratio = distance / 100;

      setPupilPos({
        x: dx * ratio * (maxOffset / 100),
        y: dy * ratio * (maxOffset / 100),
      });

      if (beamActive || persistent) {
        setBeam({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseDown = (e) => {
      setBeam({ x: e.clientX, y: e.clientY });
      setBeamActive(true);
    };

    const handleMouseUp = () => setBeamActive(false);

    const handleDoubleClick = (e) => {
      setPersistent((prev) => {
        const newPersistent = !prev;
        if (newPersistent) setBeam({ x: e.clientX, y: e.clientY });
        return newPersistent;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("dblclick", handleDoubleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  }, [isActive, beamActive, persistent]);

  const beamOn = beamActive || persistent;
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* DARKNESS WITH HOLE */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <mask id="darkMask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx={eyeX} cy={eyeY} r="32" fill="black" />
            {beamOn && <circle cx={beam.x} cy={beam.y} r="140" fill="black" />}
          </mask>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="rgba(0,0,0,0.97)"
          mask="url(#darkMask)"
        />

        {/* GLOWING BEAM WITH MULTIPLE LAYERS */}
        {beamOn &&
          [1, 2, 3, 4, 5, 6].map((i) => (
            <circle
              key={i}
              cx={beam.x}
              cy={beam.y}
              r={i * 50} // radius grows
              fill="rgba(255, 220, 150, 0.2)" // yellow-ish glow
              style={{ opacity: 1 / (i * 2), filter: "blur(20px)" }}
            />
          ))}
      </svg>

      {/* EYE */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-16 bg-transparent rounded-full flex items-center justify-center shadow-xl">
        {/* PUPIL */}
        <div
          className="w-6 h-6 bg-black rounded-full"
          style={{
            transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
            transition: "transform 0.05s linear",
          }}
        />
      </div>
    </div>
  );
}

export default DarkEye;
