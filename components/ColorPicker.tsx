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
  
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ border: "2px solid #CBD5E0", borderRadius: "20px", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <input
        style={{ opacity: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        type="color"
        id={id}
        name={name}
        value={color}
        onChange={onColorChange}
      />
      <div style={{ backgroundColor: color, borderRadius: "50%", width: "80%", height: "80%" }}></div>
    </div>

    <div style={{ border: "2px solid #CBD5E0", borderRadius: "5px", width: "350px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px" }}>
      <p>{color}</p>
    </div>
  </div>
</div>



  

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
