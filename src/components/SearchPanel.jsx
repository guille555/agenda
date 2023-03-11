import TitleH2 from "./TitleH2.jsx";
import FieldText from "./FieldText.jsx";
import FieldButton from "./FieldButton.jsx";

import styles from "./SearchPanel.module.css";

const SearchPanel = ({listFields}) => {

  const handleChange = (contact) => {
    console.log({...contact});
  };

  return (
    <div className={styles.searchPanel}>
      <TitleH2 title="Buscar contacto"/>
      {
        listFields.map((field, index) => {
          return (
            <FieldText
              key={field.field + index}
              id={field.id}
              field={field.field}
              text={field.text}
              onChange={handleChange}
            />
          );
        })
      }
      <FieldButton type="button" text="Buscar"/>
    </div>
  );
};

export default SearchPanel;
