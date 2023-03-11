import { Link } from "react-router-dom";

import styles from "./LinkButton.module.css";

const LinkButton = ({page, text}) => {
  return (
    <Link className={styles.linkButton} to={page}>{text}</Link>
  );
};

export default LinkButton;
