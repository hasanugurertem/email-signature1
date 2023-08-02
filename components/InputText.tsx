import React from "react";
import clsx from "clsx";

interface IInput {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "link";
  isValidEmail?: boolean;
  isValidLink?: boolean;
}
const Input = ({
  label,
  id,
  name,
  value,
  onChange,
  type,
  isValidEmail = true,
  isValidLink = true,
}: IInput) => {
  let isValid = true;
  if (type === "email") {
    isValid = isValidEmail;
  } else if (type === "link") {
    isValid = isValidLink;
  }

  return (
    <>
      <div>
        <label className="block p-2 font-semibold text-default" htmlFor={id}>
          {label}
        </label>
        <input
  className={clsx("p-2 rounded text-input border: 1px border-black border solid w-3/4", {
    "border-valid": isValid && value.length > 0,
  })}
  type={type}
  id={id}
  name={name}
  value={value}
  onChange={onChange}
/>
      </div>
    </>
  );
};

export default Input;
