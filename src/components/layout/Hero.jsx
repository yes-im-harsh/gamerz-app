import React from "react";
import { Link } from "react-router-dom";
import Selection from "./Selection";

const Hero = () => {
  return (
    <div>
      {/* <div class="hero min-h-screen mb-12">
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
      </div> */}
      <div class="hero min-h-screen bg-base-200 mb-12 rounded-lg shadow-md">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">
              This app helps users to navigate through different games.
            </p>
            <a href="#select" class="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
