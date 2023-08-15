import { useStepStore } from "@/store/stepStore";
import { useTemplateStore } from "@/store/templateStore";
import clsx from "clsx";
import { ClipboardType, UserCircle, Pencil, Upload } from "lucide-react";

const steps = [1, 2, 3, 4, 5, 6, 7, 8];

const Step = () => {
  const { step, setStep } = useStepStore();
  const { template } = useTemplateStore();

  const isStepClickable = (mapStep: number) => {
    if (template.id === "initial") {
      // If the template is "initial", no step is clickable
      return false;
    } else if (template.id === "plainText" && mapStep === 3) {
      // If the template is "plainText", only Step 1 and Step 2 are clickable
      return false;
    }
    // For other templates, all steps are clickable
    return true;
  };

  const handleStepClick = (mapStep: number) => {
    if (isStepClickable(mapStep)) {
      setStep(mapStep);
    }
  };

  return (
    <>
      {steps.map((mapStep) => {
        return (
          <div
            key={mapStep}
            className={clsx(
              "ml-10 bg-window -mr-[2px] my-5 w-2/5 text-[#CFD4DA]",
              {
                "cursor-pointer": isStepClickable(mapStep),
              },
            )}
            onClick={() => handleStepClick(mapStep)}
          >
            <div
              className={clsx("flex items-center py-3 pl-2", {
                "border-r-2 border-r-gray-400": step !== mapStep,
                "text-[#2AC131]": step === mapStep,
                "border-l-2 rounded-l-md border-l-gray-400": step === mapStep,
                "border-r-2 border-r-window": step === mapStep,
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
      case 8:
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
