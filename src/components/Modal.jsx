import React from "react";

const Modal = () => {
  return (
    <div className="glassmorphism flex flex-col p-8 lg:p-16 box-border max-w-screen-lg w-full lg:w-8/12">
      <p class="text-base lg:text-xl mt-0 mb-2 text-center">
        You are controlling
      </p>
      <h1 class="text-2xl lg:text-4xl m-0 text-center font-bold">
        {"Main Lounge & Dining Room"}
      </h1>
      <div class="flex flex-col lg:flex-row lg:gap-5 justify-center items-center w-full mt-8 lg:mt-16 mb-0 lg:my-16">
        <div class="grid place-items-center w-full lg:w-4/6">
          <img
            class="w-full'"
            src="https://i.ibb.co/09fmVRK/plan.png"
            alt="plan"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
