import { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { registerUser } from "../api/contactApi.mjs";

import TitleH1 from "./TitleH1.jsx";
import FieldText from "./FieldText.jsx";
import FieldButton from "./FieldButton.jsx";

import formStyles from "./FormNewContact.module.css";

const FormNewContact = () => {

  const [messageFlag,setMessageFlag] = useState("idle");

  const resetFlag = () => {
    setMessageFlag("idle");
  }

  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    const objData = Object.fromEntries(formData);
    const result = registerUser(objData);
    result
    .then((result) => {
      if (result.status === 201) {
        setMessageFlag("success");
      } else {
        setMessageFlag("error");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
      email: ""
    },
    onSubmit: handleSubmit
  });

  return (
    <div className={formStyles.formContainer}>
      <TitleH1 title="Nuevo Contacto"/>
      <form
        autoComplete="off"
        className={formStyles.form}
        onReset={formik.resetForm}
        onSubmit={formik.handleSubmit}
      >
        <FieldText
          id="name"
          field={formik.values.name}
          text="Nombre:"
          onChange={formik.handleChange}
        />
        <FieldText
          id="address"
          field={formik.values.address}
          text="Dirección:"
          onChange={formik.handleChange}
        />
        <FieldText
          id="phone"
          field={formik.values.phone}
          text="Teléfono:"
          onChange={formik.handleChange}
        />
        <FieldText
          id="email"
          field={formik.values.email}
          text="Correo electrónico:"
          onChange={formik.handleChange}
        />
        <div className={formStyles.formButtonContainer}>
          <FieldButton
            text="Registrar"
            type="submit"
          />
          <FieldButton
            text="Limpiar"
            type="reset"
            onClick={resetFlag}
          />
          <Link
            className={formStyles.formReturnButton}
            to="/contact"
          >
            Volver
          </Link>
        </div>
        {
          (messageFlag === "success") ? (
            <p className={formStyles.messageSuccess}>Contacto registrado</p>
          )
          : (messageFlag === "error") ? (
            <p className={formStyles.messageError}>Hubo un error!!</p>
          )
          : (null)
        }
      </form>
    </div>
  );
};

export default FormNewContact;
