import { useStepStore } from "@/store/stepStore";
import clsx from "clsx";
import { LayoutTemplate, UserCircle, Wrench } from "lucide-react";

const steps = [1, 2, 3];

const Step = () => {
  const { step, setStep } = useStepStore();
  return (
    <>
      {steps.map((mapStep) => {
        return (
          <div
            key={mapStep}
            className="ml-10 bg-window rounded-lg cursor-pointer m-5 w-2/5 text-[#CFD4DA]"
            onClick={() => setStep(mapStep)}
          >
            <div
              className={clsx("flex items-center p-4", {
                "text-[#2AC131]": step === mapStep,
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

const stepsPicker = (mapStep: number, step: number) => {
  switch (mapStep) {
    case 1:
      return (
        <div className="flex items-center gap-3">
          <LayoutTemplate color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
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
  }
};
