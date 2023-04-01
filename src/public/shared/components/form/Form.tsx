import * as React from "react";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";
import Input from "../input/Input";
import "./Form.scss";

const Form = () => {
  // --------inicio estados--------
  // --------fin estados--------

  // --------hooks--------

  // --------Fin hooks--------

  //Inicio de método
  function functionFatherCheck(text: any) {
    console.log(text);
  }

  const fatherFuntionInput = (value: string) => {
    console.log(value);
    if (value === "cedula de ciudadania") {
      return {
        state: true,
        description: "",
      };
    } else {
      return {
        state: false,
        description: "El dato ingresado es erroneo ingresa juan",
      };
    }
  };

  const fatherFuntionButton = (): void => {
    console.log("⭐");
  };

  //Fin de metodo

  // ----retorno de componente

  return (
    <section className="containerForm">
      <div className="divTp">
      <h2 className="hForm">Solicita tu crédito</h2>    
        <p className="pForm">
          Ten presente que los datos ingresados son importantes para el proceso de
          aprobación
        </p>
      </div>
      
      <form className="initialForm">
        <div className="divInput">
        <label className="labelForm">
          <span className="spanForm">Tipo de documento</span>
          <Input
            label="select"
            listSelect={["cedula de ciudadania", "cedula extranjera "]}
            type={"text"}
            placeholder={"input de prueba"}
            fatherFuntion={fatherFuntionInput}
          />
        </label>

        <label className="labelForm">
          <span className="spanForm">Número de Documento</span>
          <Input
            label="text"
            listSelect={["cedula de ciudadania", "cedula extranjera "]}
            type={"text"}
            placeholder={"input de prueba"}
            fatherFuntion={fatherFuntionInput}
          />
        </label>
        <label className="labelForm">
          <span className="spanForm">Número de celular</span>
          <Input
            label="text"
            listSelect={["cedula de ciudadania", "cedula extranjera "]}
            type={"text"}
            placeholder={"input de prueba"}
            fatherFuntion={fatherFuntionInput}
          />
        </label>
        <label className="labelForm">
          <span className="spanForm">Correo electrónico</span>
          <Input
            label="text"
            listSelect={["cedula de ciudadania", "cedula extranjera "]}
            type={"text"}
            placeholder={"input de prueba"}
            fatherFuntion={fatherFuntionInput}
          />
        </label>
        </div>
        
        <Checkbox
          text={[
            "Al enviar la información autorizas: la política de tratamiento de datos personales, la autorización para la utilización de datos personales, el aviso de privacidad, la autorización Seguros de Vida Deudores y de Desempleo y la pignoración de la cuota monetaria.",
          ]}
          default={[false, false, true]}
          many={true}
          functionP={functionFatherCheck}
        />
        <img
          src={require("../../../assets/images/reCaptcha.png").default}
          alt="reCaptcha"
          className="reCaptcha"
        />
      </form>
      <div className="divButton">
        <Button
          text={"Iniciar solicitud"}
          state={false}
          fatherFuntionButton={fatherFuntionButton}
        />
        </div>
    </section>
  );
};

export default Form;
