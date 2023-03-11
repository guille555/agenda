import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { findContact } from "../api/contactApi.mjs";

import TitleH1 from "./TitleH1.jsx";
import FieldText from "./FieldText.jsx";

import styles from "./DetailContact.module.css";
import LinkButton from "./LinkButton.jsx";

const DetailContact = () => {

  const params = useParams();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    const contact = findContact(params.id);
    contact.then((result) => {
      setContact(result.data);
    });
  }, []);

  if (contact === null) {
    return <p>Loading...</p>
  }

  return (
    <>
      <TitleH1 title="Detalle del contacto"/>
      <div className={styles.detailContainer}>
        <FieldText
          id="name"
          field={contact.name}
          text="Nombre y apellido:"
          onChange={null}
          readOnly
        />
        <FieldText
          id="address"
          field={contact.address.street}
          text="Dirección:"
          onChange={null}
          readOnly
        />
        <FieldText
          id="email"
          field={contact.email}
          text="Correo electrónico:"
          onChange={null}
          readOnly
        />
        <FieldText
          id="phone"
          field={contact.phone}
          text="Teléfono:"
          onChange={null}
          readOnly
        />
        <FieldText
          id="website"
          field={contact.website}
          text="Sitio web:"
          onChange={null}
          readOnly
        />
        <div>
          <LinkButton page="/contact" text="Volver"/>
        </div>
      </div>
    </>
  );
};

export default DetailContact;
