import { useState } from "react"; // Import useState hook
import { useStepStore } from "@/store/stepStore";
import clsx from "clsx";
import { ClipboardType, UserCircle, Pencil, Upload } from "lucide-react";

const steps = [1, 2, 3, 4, 5, 6];

const Step = () => {
  const { step, setStep } = useStepStore();

  return (
    <>
      {steps.map((mapStep) => {
        return (
          <div
            key={mapStep}
            className="ml-10 w-1/2 bg-window -mr-[2px] my-8 text-[#CFD4DA]"
            onClick={() => setStep(mapStep)}
          >
            <div
              className={clsx("flex justify-center py-3 pl-2 ", {
                "border-r-2 border-r-gray-200": step !== mapStep,
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

const stepsPicker = (mapStep: number, step: number) => {

  switch (mapStep) {
    case 1:
      return (
        <div className="items-center gap-3">
          <ClipboardType color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          <div className="text-sm">
            Step {mapStep}
          </div>
        </div>
      );
    case 2:
      return (
        <div className="items-center gap-3">
          <UserCircle color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          <div className="text-sm">
            Step {mapStep}
          </div>
        </div>
      );
    case 3:
      return (
        <div className="items-center gap-3">
          <Pencil color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          <div className="text-sm">
            Step {mapStep}
          </div>
        </div>
      );
    case 6:
      return (
        <div className="items-center gap-3" >
          <Upload color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          <div className="text-sm">
            Upload
          </div>
        </div>

      );
  }
};
