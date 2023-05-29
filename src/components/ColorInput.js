import React from 'react'
import './ColorInput.css'
import { FaTimes } from 'react-icons/fa';

function ColorInput({
  placeholder,
  type,
  onChange,
  value,
  handleAddColor,
  handleRemoveColor,
  colors,
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
        <button type="button" onClick={handleAddColor}>
          Add Color
        </button>
        <ul className="list__color">
          {colors?.map((color, index) => (
            <li key={index} className="color__li">
              {color + " "}
              <FaTimes onClick={()=>handleRemoveColor(index)}/>
              {/* <FaTimes onClick={handleRemoveColor(index)} /> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ColorInput