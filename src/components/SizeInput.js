import React from "react";
import "./ColorInput.css";
import { FaTimes } from "react-icons/fa";

function SizeInput({
  placeholder,
  type,
  onChange,
  value,
  handleAddSize,
  handleRemoveSize,
  selectedSizes,
}) {
  return (
    <div className="inputcolorcontainer">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="color__listadd">
        <button type="button" onClick={handleAddSize}>
          Add Sizes
        </button>
        <ul className="list__color">
          {selectedSizes?.map((size, index) => (
            <li key={index} className="color__li">
              {size + " "}
              <FaTimes onClick={() => handleRemoveSize(index)} className="curp" />
              {/* <FaTimes onClick={handleRemoveColor(index)} /> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SizeInput;
