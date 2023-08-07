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
      <div className="border-2 border-gray-400 rounded-lg p-2">
        <label
          className="block mt-2 font-semi-bold text-default bg-background"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className="w-full h-0 rounded-lg appearance-none bg-background border border-gray-200 cursor-pointer"
          type="range"
          id={id}
          name={name}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={onChange}
        />
        <output
          className="pb-2 border-b-4 border-background text-default"
          htmlFor={id}
        >
          {value}
        </output>
      </div>
      <div className="my-10"></div>
    </>
  );
};

export default Slider;
