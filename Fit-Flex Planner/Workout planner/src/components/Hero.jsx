import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          FlexFit<span className="text-blue-400"> Planner</span>
        </h1>
      </div>
      <p className="text-sm md:text-xl font-light">
        Unleash Your Potential: Embrace the Journey to Your Best Self!{" "}
        <span className="text-blue-400 font-medium">
          Transform your physique
        </span>{" "}
        , boost your confidence, and achieve greatness with our customized
        workout planner. Get ready to become the best version of yourself –{" "}
        <span className="text-blue-400 font-medium">
          strong, confident, and unstoppable!
        </span>
        
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
