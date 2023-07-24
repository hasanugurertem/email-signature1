import React from "react";

interface IDescription {
  primary: string;
  secondary: string;
}
const Description = ({ primary, secondary }: IDescription) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-default underline decoration-decoration">
          {primary}
        </h1>
        <p className="text-sm text-default">{secondary}</p>
      </div>
    </>
  );
};

export default Description;
