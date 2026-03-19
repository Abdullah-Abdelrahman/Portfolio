import React, { useEffect, useState } from "react";

export const Slider = ({ skilles = [] }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides([...skilles, ...skilles]);
  }, [skilles]);

  return (
    <div className="slider w-full">
      <div className="slider-track scrollLeft">
        {slides.map((item, key) => (
          <div key={key} className="card-wrapper w-fit rounded-2xl mr-2">
            <div className="card  rounded-lg shadow-xs relative">
              <img
                src="/imgs/skillCard1.png"
                style={{ height: "160px", width: "160px" }}
                className="relative z-1"
              />

              <div className="w-full absolute top-[10%] flex flex-col justify-center items-center z-2">
                <div className="mb-1">
                  <h4 className=" font-semibold">{item.name}</h4>
                </div>

                <div className="mt-1">
                  <span className="text-1xl text-muted-foreground">
                    {item.level}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
