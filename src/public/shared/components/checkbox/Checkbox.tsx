import React, { useState, useEffect } from "react";
import "./Checkbox.scss";
const checkImage = require("../../../assets/checkedIcon.png").default;
const uncheckImage = require("../../../assets/uncheckedIcon.png").default;

const Checkbox = (props: any) => {
  // --------inicio estados--------
  const [selectChecbox, setSelectChecbox] = useState(props.default);
  const [text, setText] = useState<String[]>([]);
  // --------fin estados--------

  // --------hooks--------
  useEffect(() => {
    props.functionP(text);
  }, [text]);
  // --------fin hooks--------

  // --------metodos--------
  const handleCheck = (index: number) => {
    const newStates = [...selectChecbox];

    if (!props.many) {
      newStates.fill(false);
    }
    newStates[index] = !newStates[index];
    setSelectChecbox([...newStates]);

    const newStateText: string[] = [];
    for (let i = 0; i < props.text.length; i++) {
      if (newStates[i]) {
        newStateText.push(props.text[i]);
      }
    }
    setText([...newStateText]);
  };
  // --------fin de metodos--------

  // --------retorno de componente
  return (
    <div className="checkbox-container">
      {props.text?.map((text: string, index: number) => {
        return (
          <div key={index} className="checkbox-checkbox">
            <span
              className="checkbox-image"
              onClick={() => handleCheck(index)}
              style={{
                backgroundImage: `url(${
                  selectChecbox[index] ? checkImage : uncheckImage
                })`,
              }}
            ></span>
            <label className="checkbox-text" style={{fontSize:props.size}}>{text}</label>
          </div>
        );
      })}
    </div>
  );
};
export default Checkbox;
