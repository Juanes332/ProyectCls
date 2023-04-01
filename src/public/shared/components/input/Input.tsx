import React, { useState, useEffect } from "react";
const selectIcon = require("../../../assets/inputSelect.png").default
import "./Input.scss";

interface propsInput {
  type: string;
  placeholder: string;
  fatherFuntion: (value: string) => { state: boolean; description: string };
  label: string;
  listSelect: string[];
}

const Input = (props: propsInput) => {
  // --------inicio estados--------
  const [state, setstate] = useState(true);
  const [description, setDescription] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [mounted, setMounted] = useState<boolean>(false);
  // --------fin estados--------

  // --------hooks--------
  useEffect(() => {
    if (mounted) {
      let resfather = props.fatherFuntion(valueInput);
      setstate(resfather.state);
      setDescription(resfather.description);
    } else {
      setMounted(true);
    }
  }, [valueInput]);

  // --------fin hooks--------

  // --------metodos--------
  const validateInput = (value: string) => {
    setValueInput(value);
  };
  // --------fin de metodos--------

  // --------retorno de componente
  return (
    <div className="cantainer-input">
      {props.label === "select" ? (
        <select
          className={state ? "input inputBasic" : "input inputError"}
          id="idSelect"
          value={valueInput}
          onChange={(e) => {
            validateInput(e.target.value);
          }}
          style={{
            backgroundImage: `url(${selectIcon})`,
          }}
        >
          <option value="" disabled hidden>
          {props.placeholder}
          </option>
          {props.listSelect.map((text: string, index: number) => {
            return <option key={index}>{text}</option>;
          })}
        </select>
      ) : (
        <input
          type={props.type}
          className={state ? "input inputBasic" : "input inputError"}
          placeholder={props.placeholder}
          onBlur={(e) => validateInput(e.target.value)}
        ></input>
      )}
      {!state ? <label className="description">{description}</label> : null}
    </div>
  );
};

export default Input;
