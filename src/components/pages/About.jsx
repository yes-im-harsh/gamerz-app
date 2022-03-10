import React from "react";

const About = () => {
  return (
    <div className="mx-2">
      <h1 className="text-6xl mb-4">GameRZ App</h1>
      <p className="mb-4 text-xl font-light">
        This app displays the latest and popular games, the api used here is
        rawg.io
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-primary">1.0.0</span>
      </p>
    </div>
  );
};

export default About;
