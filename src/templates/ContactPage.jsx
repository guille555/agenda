import TitleH1 from "../components/TitleH1.jsx";
import LinkButton from "../components/LinkButton.jsx";
import ListContacts from "../components/ListContacts.jsx";

import styles from "./ContactPage.module.css";

const ContactPage = () => {

  return (
    <main>
      <div className={styles.titleContainer}>
        <TitleH1 title="Contactos"/>
        <LinkButton page="/newContact" text="Agregar"/>
      </div>
      <ListContacts/>
    </main>
  );
};

export default ContactPage;
