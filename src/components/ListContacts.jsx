import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TitleH2 from "./TitleH2.jsx";

import { findAllContacts } from "../api/contactApi.mjs";

import detailIcon from "../assets/icons/circle-info-solid.svg";
import editIcon from "../assets/icons/pen-to-square-solid.svg";
import eraseIcon from "../assets/icons/trash-solid.svg";

import styles from "./ListContacts.module.css";

const ListContacts = () => {

  const [listContacts, setListContacts] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const listContacts = findAllContacts();
    listContacts.then((result) => {
      setListContacts(result.data);
    });
  }, []);

  const listHeaders = [
    {header:"Apellido y Nombre"},
    {header:"Teléfono"},
    {header:"Correo electrónico"},
    {header:"Acciones"}
  ];

  const handleChange = ({target}) => {
    setName(target.value);
  };

  const handleSearch = () => {
    const result = listContacts.filter((contact) => {
      return contact.name.includes(name);
    });
    setListContacts(result);
  }

  const handleReset = () => {
    const listContacts = findAllContacts();
    listContacts.then((result) => {
      setListContacts(result.data);
    });
    setName("");
  };

  return (
    <>
      <div className={styles.searchPanel}>
        <TitleH2 title="Buscar contacto"/>
        <div className={styles.fieldContainer}>
          <label
            htmlFor="name"
            className={styles.fieldLabel}
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            className={styles.fieldInput}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className={styles.formButtonContainer}>
          <button className={styles.formButton} onClick={handleSearch}>Buscar</button>
          <button className={styles.formButton} onClick={handleReset}>Limpiar</button>
        </div>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.listHeadersContainer}>
          {
            listHeaders.map((header) => {
              return (
                <div key={header.header} className={styles.header}>
                  {header.header}
                </div>
              );
            })
          }
        </div>
        {
          listContacts.map((contact, index) => {
            return (
              <div className={styles.contactCell} key={contact.name}>
                <div className={styles.contactColumnInfo}>
                  <p>{contact.name}</p>
                </div>
                <div className={styles.contactColumnInfo}>
                  <p>{contact.phone}</p>
                </div>
                <div className={styles.contactColumnInfo}>
                  <p>{contact.email}</p>
                </div>
                <div key={contact.name + index} className={styles.contactColumnInfo}>
                  <Link to={`/detailContact/${contact.id}`}>
                    <img
                      className={styles.listIcon}
                      src={detailIcon}
                      alt={`detail of ${contact.name}`}
                    />
                  </Link>
                  <Link to={`/editContact/${contact.id}`}>
                    <img
                      className={styles.listIcon}
                      src={editIcon}
                      alt={`edit ${contact.name}`}
                    />
                  </Link>
                  <Link to={`/eraseContact/${contact.id}`}>
                    <img
                      className={styles.listIcon}
                      src={eraseIcon}
                      alt={`erase ${contact.name}`}
                    />
                  </Link>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default ListContacts;
