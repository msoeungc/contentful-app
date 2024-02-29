import React from "react";
import heroImg from './assets/heroCodeImg.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
            voluptatibus, ipsa, ex corrupti earum quisquam quia obcaecati labore
            itaque deserunt ipsum quo, saepe facere rerum ullam sit laboriosam!
            Officia?
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
