import styles from "./Field.module.css";

const FieldText = ({id, field, text, onChange, ...props}) => {
  return (
    <div className={styles.fieldContainer}>
      <label
        className={styles.label}
        htmlFor={id}
      >
        {text}
      </label>
      <input
        className={styles.textField}
        type="text"
        name={id}
        id={id}
        value={field}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default FieldText;
