import { useState } from "react"; // Import useState hook
import { useStepStore } from "@/store/stepStore";
import clsx from "clsx";
import { ClipboardType, UserCircle, Wrench, Upload } from "lucide-react";

const steps = [1, 2, 3, 4];

const Step = () => {
  const { step, setStep } = useStepStore();




  return (
    <>
      {steps.map((mapStep) => {
        return (
          <div
            key={mapStep}
            className="ml-10 bg-window -mr-[2px] my-8 w 2/5 text-[#CFD4DA]"
            onClick={() => setStep(mapStep)}
          >
            <div
              className={clsx("flex items-center py-3 pl-2 ", {
                "border-r-2 border-r-white": step !== mapStep,
                "text-[#2AC131]": step === mapStep,
                "border-l-2 rounded-l-md border-l-gray-400": step === mapStep,
                "border-r-2 border-r-window ": step === mapStep,
                "border-y-2 rounded-l-md border-y-gray-400": step === mapStep,
              })}
            >
              {stepsPicker(mapStep, step)}
            </div>
          </div>
        );
      })}

    </>
  );
};

export default Step;

import React from 'react';
import Description from "./Description";

const stepsPicker = (mapStep: number, step: number) => {
  const handleFileUpload = () => {
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.click();
    }
  };

  switch (mapStep) {
    case 1:
      return (
        <div className="flex items-center gap-3">
          <ClipboardType color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          Step {mapStep}
        </div>
      );
    case 2:
      return (
        <div className="flex items-center gap-3">
          <UserCircle color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          <p className=""> Step {mapStep}</p>
        </div>
      );
    case 3:
      return (
        <div className="flex items-center gap-3">
          <Wrench color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          Step {mapStep}
        </div>
      );
    case 4:
      return (
        <div className="flex items-center gap-3" >
          
          <Upload />
          Upload
        </div>

      );
  }
};
