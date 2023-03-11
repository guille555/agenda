import styles from "./Title.module.css";

const TitleH2 = ({title}) => {
  return (
    <h2 className={styles.titleH2}>{title}</h2>
  );
};

export default TitleH2;
