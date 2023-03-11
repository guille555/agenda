import styles from "./Title.module.css";

const TitleH1 = ({title}) => {
  return (
    <h1 className={styles.titleH1}>{title}</h1>
  );
};

export default TitleH1;
