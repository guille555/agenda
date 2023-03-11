import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import TitleH1 from "./TitleH1.jsx";
import FieldText from "./FieldText.jsx";
import FieldButton from "./FieldButton.jsx";

import { findContact, editContact } from "../api/contactApi.mjs";

import styles from "./FormNewContact.module.css";

const EditContact = () => {

  const params = useParams();
  const [contact, setContact] = useState({
    name: "",
    address: "",
    phone: "",
    email: ""
  });
  const [messageFlag,setMessageFlag] = useState("idle");

  useEffect(() => {
    const contact = findContact(params.id);
    contact.then((result) => {
      setContact(result.data);
    });
  }, []);

  if (contact === null) {
    return <p>Loading...</p>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objData = Object.fromEntries(formData);
    const result = editContact(objData);
    result.then((result) => {
      if (result.status === 200) {
        setMessageFlag("success");
      } else {
        setMessageFlag("error");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleChange = ({target}) => {
    setContact({...contact, [target.name]:target.value});
  };

  return (
    <div className={styles.formContainer}>
      <TitleH1 title="Editar Contacto"/>
      <form
        autoComplete="off"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <FieldText
          id="name"
          field={contact.name}
          text="Nombre:"
          onChange={handleChange}
        />
        <FieldText
          id="address"
          field={contact.address.street}
          text="Dirección:"
          onChange={handleChange}
        />
        <FieldText
          id="phone"
          field={contact.phone}
          text="Teléfono:"
          onChange={handleChange}
        />
        <FieldText
          id="email"
          field={contact.email}
          text="Correo electrónico:"
          onChange={handleChange}
        />
        <div className={styles.formButtonContainer}>
          <FieldButton
            text="Modificar"
            type="submit"
          />
          <Link
            className={styles.formReturnButton}
            to="/contact"
          >
            Volver
          </Link>
        </div>
        {
          (messageFlag === "success") ? (
            <p className={styles.messageSuccess}>Contacto modificado</p>
          )
          : (messageFlag === "error") ? (
            <p className={styles.messageError}>Hubo un error!!</p>
          )
          : (null)
        }
      </form>
    </div>
  );
};

export default EditContact;
