import styles from "./Field.module.css";

const FieldButton = ({type, text, ...props}) => {
  return (
    <div className={styles.buttonContainer}>
      <input className={styles.button} type={type} value={text} {...props}/>
    </div>
  );
};

export default FieldButton;
