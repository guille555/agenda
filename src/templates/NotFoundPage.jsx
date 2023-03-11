import {useNavigate} from "react-router-dom";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.notFoundPageContainer}>
      <p className={styles.errorText}>Error, something is not working...</p>
      <button className={styles.button} onClick={handleClick}>Go back</button>
    </div>
  );
};

export default NotFoundPage;
