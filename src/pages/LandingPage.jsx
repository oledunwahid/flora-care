import React from "react";
import Image1 from "../assets/flower.png";
import Image2 from "../assets/three pink flowers.png";

function LandingPage() {
  return (
    <>
      <section className="h-[700px] flex items-center overflow-x-hidden bg-gradient-to-tr from-stone-300 via-red-300 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center lg:gap-y-8 lg:gap-x-56 h-full">

            {/* text */}
            <div className="text-center">
              <h1 className="text-7xl lg:text-8xl text-white drop-shadow-md shadow-black-600/50">
                Welcome <span /> to floracare
              </h1>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
