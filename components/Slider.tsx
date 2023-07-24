import React from "react";

import useCustomizationStore from "../store/customizationStore";

interface ISlider {
  label: string;
  id: string;
  name: string;
  min: number;
  max: number;
  value: number;
  step: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Slider = ({
  label,
  id,
  name,
  min,
  max,
  value,
  step,
  onChange,
}: ISlider) => {
  const { customizationOutput, setCustomizationOutput, handleChange } =
    useCustomizationStore();

  return (
    <>
      <div>
        <label className="block mt-2 font-semi-bold text-default" htmlFor={id}>
          {label}
        </label>
        <input
          className="w-full h-2 rounded-lg appearance-none bg-background cursor-pointer"
          type="range"
          id={id}
          name={name}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
        />
        <output
          className="pb-2 border-b border-background text-default"
          htmlFor={id}
        >
          {value}
        </output>
      </div>
    </>
  );
};

export default Slider;
