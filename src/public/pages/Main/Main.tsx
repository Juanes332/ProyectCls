// imports
import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../shared/redux/useRedux";
import { RootState } from "../../shared/redux/store";
import { setUser, fetchUser, setLoading } from "../../shared/redux/user/userSlice";
import Navbar from "../../shared/components/navbar/Navbar";
import Footer from "../../shared/components/footer/Footer";
import Checkbox from "../../shared/components/checkbox/Checkbox";
import Input from "../../shared/components/input/Input";
import Button from "../../shared/components/button/Button";
import "./Main.scss";
import Banner from "../../shared/components/banner/Banner";
import { useEffect } from "react";
import { fetchDataPage } from "../../shared/redux/page/pageSlice";
import Sections from "../../shared/components/sections/Sections";
import InformativeBanner from "../../shared/components/informative-banner/InformativeBanner";
import Modal from "../../shared/components/modal/Modal";
import Alerts from "../../shared/components/alerts/Alerts";

const Main = () => {
  // --------inicio estados--------
  // --------fin estados--------

  const currentUser = useAppSelector((state: RootState) => state.user.info);
  const loading = useAppSelector((state: RootState) => state.user.loading);
  const error = useAppSelector((state: RootState) => state.user.error);

  const loadingPage = useAppSelector((state: RootState) => state.page.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // carga componentes de la pagina
    dispatch(fetchDataPage());
  }, [dispatch]);
  // --------fin hooks-------

  // --------metodos--------

  function functionFatherCheck(text: any) {
    console.log(text);
  }

  const createUser = (): void => {
    dispatch(
      setUser({
        typeOfDocument: 1,
        numberDocument: "123456789",
        phone: "987654321",
        email: "test@test.co",
      })
    );
  };

  const fatherFuntionButton = (): void => {
    console.log("⭐");
  };

  const fatherFuntionInput = (value: string) => {
    console.log(value)
    if (value === "cedula de ciudadania") {
      return {
        state: true,
        description: ""
      };
    } else {
      return {
        state: false,
        description: "el dato ingresado es erroneo ingrasa juan"
      };
    }
  };

  const closeModal = () => {
      dispatch(setLoading(!loading))
  }

  // --------fin de metodos--------

  // --------retorno de componente
  return (
    <>
<button onClick={() =>{
  dispatch(setLoading(true))
}} >poner a cargar</button>

      <Modal
        isOpen={loading}
        onClose={()=>{closeModal()}}
        textLoad="Tu solicitud de crédito está siendo procesada. Por favor espera, tendrás respuesta en un momento."
        width="396px"
        />

        <Alerts
        type="error"
        message="hola"
        />


      {error && <h4>{error}</h4>}

      {/* <Button
        text={"Iniciar solicitud"}
        state={false}
        fatherFuntionButton={fatherFuntionButton}
      /> */}

      {!loadingPage && (
        <>
          <Navbar />
          <Banner />
          <Sections />
          <InformativeBanner />
        </>
      )}

      {/* { <Checkbox
        text={["Al enviar la información autorizas: la política de tratamiento de datos personales, la autorización para la utilización de datos personales, el aviso de privacidad, la autorización Seguros de Vida Deudores y de Desempleo y la pignoración de la cuota monetaria.", "hola", "mundo"]}
        default={[false, false, true]}
        many={true}
        functionP={functionFatherCheck}
        size="12px"
      /> }
      <Input
        label="select"
        listSelect={["cedula de ciudadania", "cedula extranjera "]}
        type={"text"}
        placeholder={"input de prueba"}
        fatherFuntion={fatherFuntionInput}
      /> */}
      <Footer />
    </>
  );
};

export default Main;
