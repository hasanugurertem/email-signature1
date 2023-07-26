import React, { useState } from "react";

type ChangeOrMouseEvent = React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>;

interface IColorPicker {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: ChangeOrMouseEvent) => void;
}

const ColorPicker = ({ label, id, name, value, onChange }: IColorPicker) => {
  const [color, setColor] = useState("");

  const handleDefaultColorClick = (defaultColor: string) => {
    setColor(defaultColor);
    onChange({ target: { name, value: defaultColor } } as ChangeOrMouseEvent);
  };

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    onChange(e);
  };

  return (
    <>
      <div className="m-2" style={{ backgroundColor: "white" }}>
        <label className="block pb-2 font-semibold text-default" htmlFor={id} style={{ fontFamily: "inherit" }}>
          {label}
        </label>
        <input
          style={{ border: "2px solid black", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}
          className="w-[40px] h-[40px] p-4 border-4 border-nureply-blue-full rounded-lg overflow-hidden"
          type="color"
          id={id}
          name={name}
          value={color}
          onChange={onColorChange}
        />
      </div>
    </>
  );
};

export default ColorPicker;
