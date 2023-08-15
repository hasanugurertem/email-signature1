import React, { useState } from "react";
import clsx from "clsx";

interface InputTextProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "link";
}

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function isEmailValid(email: string): boolean {
  return email === "" || emailRegex.test(email);
}

function isLinkValid(link: string, label: string): boolean {
  try {
    const url = new URL(link);
    const { hostname, pathname } = url;
    const domain = hostname.replace("www.", "");

    switch (domain) {
      case "linkedin.com":
        return label === "LinkedIn" && pathname.startsWith("/in/");
      case "youtube.com":
        return label === "YouTube" && pathname.startsWith("/user/");
      case "twitter.com":
        return label === "Twitter" && pathname.split("/").length >= 2;
      case "facebook.com":
        return label === "Facebook";
      case "instagram.com":
        return label === "Instagram" && pathname.split("/").length >= 2;
      default:
        return false;
    }
  } catch (e) {
    return false;
  }
}

const InputText: React.FC<InputTextProps> = ({
  type = "text",
  label,
  id,
  name,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const isValidationNeeded = type === "email" || type === "link";
  const isValid =
    (type === "email" && isEmailValid(value)) ||
    (type === "link" && isLinkValid(value, label));
  const showValidBorder = isValidationNeeded && isValid && value.length > 0;
  const showInvalidBorder = isValidationNeeded && !isValid && value.length > 0;

  return (
    <div>
      <label
        className={clsx("block p-2 font-semibold text-default")}
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className={clsx(
          "w-full my-2 p-2 rounded border-2 border-highlight text-input focus:outline-none",
          showValidBorder && "border-valid",
          showInvalidBorder && "border-invalid",
        )}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {showInvalidBorder && (
        <p
          className={clsx("text-sm", {
            "text-invalid": isValidationNeeded && !isValid && value.length > 0,
          })}
        >
          {isValidationNeeded && !isValid && value.length > 0
            ? `Invalid URL format ${
                type === "email" ? "email" : ""
              } `
            : ""}
        </p>
      )}
    </div>
  );
};

export default InputText;
