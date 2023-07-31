import React, { useState } from "react";

type ChangeOrMouseEvent = React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>;

interface IColorPicker {
  label: string;
  id: string;
  name: string;
  onChange: (event: ChangeOrMouseEvent, color: string) => void;
}

const ColorPicker = ({ label, id, name, onChange }: IColorPicker) => {
  const [color, setColor] = useState("#FFFFFF"); // Başlangıçta beyaz renk kullanabiliriz

  const handleDefaultColorClick = (defaultColor: string) => {
    setColor(defaultColor);
    onChange({} as ChangeOrMouseEvent, defaultColor); 
  };

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    onChange(e, e.target.value); // Renk seçildiğinde onChange fonksiyonuna renk bilgisini gönderiyoruz
  };

  return (
    <>
      <div className="m-2" style={{ backgroundColor: "white", position: "relative" }}>
        <label className="block pb-2 font-semibold text-default" htmlFor={id} style={{ fontFamily: "inherit" }}>
          {label}
        </label>
        <input
          style={{ border: "2px solid black", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}
          className="w-[40px] h-[40px] p-4 border-4 border-nureply-blue-full rounded-lg overflow-hidden"
          type="color"
          id={id}
          name={name}
          value={color}
          onChange={onColorChange}
        />
      </div>
      <div className="m-2" style={{ backgroundColor: color, width: "40px", height: "40px", borderRadius: "20px" }}></div>
      <p> {color}</p>
    </>
    
  );
};

export default ColorPicker;

// HEX rengini RGB'ye dönüştüren fonksiyon
function convertHexToRGB(hex: string): string {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}
