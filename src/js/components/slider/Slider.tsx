import React, { useState, useEffect } from "react";
import projects from "./projects";

function Slider() {
  const [active, setActive] = useState(0);
  const lastItem = projects.length - 1;

  const handleTouch = () => {
    if (active > lastItem) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };
  return (
    <section>
      <div className="slider-container">
        <Title color={"Kreatywne"} normal={"Pomysły"} />
        <div className="slider-content">
          {projects.map((project) => {
            return (
              <div className="slide" key={project.id}>
                <div className="slide-img" onTouchStart={() => handleTouch()}>
                  <img src={project.img} alt={project.name} />
                </div>
              </div>
            );
          })}
        </div>
        <Indicators />
        <div className="slider-content">
          {projects.map((project) => {
            return (
              <div className="slide" key={project.id}>
                <p className="description">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Indicators = () => {
  return (
    <div className="indicators">
      <div className="rect"></div>
      <div className="rect"></div>
      <div className="rect"></div>
    </div>
  );
};

//tez roboczo..

const Title = (props: any) => {
  return (
    <div className="fancy-title">
      <h2 className="title-color">{props.color}</h2>
      <h2 className="title-normal">{props.normal}</h2>
    </div>
  );
};

export default Slider;
