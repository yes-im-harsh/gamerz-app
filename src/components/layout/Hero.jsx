import React from "react";

const Hero = () => {
  return (
    <div>
      <div class="hero min-h-screen mb-12">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold font-mono">GameRZ App</h1>
            <p class="mb-5">
              This app help users to navigate through different games with
              rating, downloads,
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
