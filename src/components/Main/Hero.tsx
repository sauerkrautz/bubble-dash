import React, { Children } from "react";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="heroSection">
        <div>
          <p className="heroMainText">Create Amazing Digital Product</p>
          <p className="heroMainText">For Your Business </p>
        </div>
        <p className="heroSubText">
          We are a professional digital agency that has been established since
          2016, we present a variety of digital services that can help you solve
          problems in your business
        </p>
        <button className="heroButton">Get Started </button>
        {children}
      </div>
      <div className="heroImageContainer">
        <img
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
        />

        <div className="flex-center heroImageTextItems">
          <div className="flex-column-center">
            <p>1.2K+</p>
            <p>Happy Clients</p>
          </div>
          <div className="flex-column-center">
            <p>1.1K+</p>
            <p>Worldwide Clients</p>
          </div>
          <div className="flex-column-center">
            <p>6+</p>
            <p>Years of Experience</p>
          </div>
          <div className="flex-column-center">
            <p>12+</p>
            <p>Award Winners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
